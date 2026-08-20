const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");
const { initWebSocket, getWSS } = require("./socket");
const Product = require("./models/Product");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ======================
// ROOT TEST ROUTE
// ======================
app.get("/", (req, res) => {
  res.send("Backend running on port 5000 🚀");
});

// ======================
// Routes
// ======================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// ======================
// Create HTTP server
// ======================
const server = http.createServer(app);

// ======================
// WebSocket Server (ONLY ONE)
// ======================
const wss = new WebSocket.Server({ server });

// Store WebSocket instance globally
initWebSocket(wss);

wss.on("connection", (ws) => {
  console.log("🟢 WebSocket Client connected");

  ws.send(
    JSON.stringify({
      type: "WELCOME",
      message: "Connected to WebSocket server",
    })
  );

  ws.on("close", () => {
    console.log("🔴 WebSocket Client disconnected");
  });
});

// ===================================================
// 🔔 ADMIN ADD PRODUCT (WITH NOTIFICATION)
// ===================================================
app.post("/api/admin/add-product", async (req, res) => {
  try {
    const { name, price } = req.body;

    // 1️⃣ Save to MongoDB
    const product = await Product.create({ name, price });

    // 2️⃣ Send WebSocket notification
    const wsServer = getWSS();

    if (wsServer) {
      wsServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "PRODUCT_ADDED",
              message: `Admin added new product: ${name}`,
              product,
            })
          );
        }
      });
    }

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Add product failed" });
  }
});

// ===================================================
// 🔔 ADMIN DELETE PRODUCT (WITH NOTIFICATION)
// ===================================================
app.delete("/api/admin/delete-product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    // 🔔 Send WebSocket notification
    const wsServer = getWSS();

    if (wsServer) {
      wsServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "PRODUCT_DELETED",
              message: `Admin deleted product: ${product.name}`,
              productId: req.params.id,
            })
          );
        }
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
});

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 HTTP + WebSocket running on ${PORT}`);
});












