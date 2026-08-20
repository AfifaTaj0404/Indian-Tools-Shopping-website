const Product = require("../models/Product");
const { getWSS } = require("../socket");
const WebSocket = require("ws");

// ===============================
// GET ALL PRODUCTS
// ===============================
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// ADD PRODUCT
// ===============================
exports.addProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      image: image.trim(), // ✅ remove spaces
    });

    // 🔔 WebSocket Broadcast
    const wss = getWSS();

    if (wss && wss.clients) {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "PRODUCT_ADDED",
              message: `Admin added product: ${product.name}`,
              product: product,
            })
          );
        }
      });
    }

    res.status(201).json(product);
  } catch (err) {
    console.error("ADD ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// DELETE PRODUCT
// ===============================
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    // 🔔 WebSocket Broadcast
    const wss = getWSS();

    if (wss && wss.clients) {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "PRODUCT_DELETED",
              message: `Admin deleted product: ${product.name}`,
              productId: product._id,
            })
          );
        }
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

