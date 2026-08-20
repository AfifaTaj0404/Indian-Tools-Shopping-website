import { addNotification } from "./notificationStore";

// ✅ Create only ONE WebSocket connection
export const socket = new WebSocket("ws://localhost:5000");

socket.onopen = () => {
  console.log("🟢 User WebSocket connected");
};

socket.onmessage = (event) => {
  try {
    const msg = JSON.parse(event.data);

    console.log("📩 WebSocket Message:", msg);

    // ===============================
    // 🔔 PRODUCT ADDED
    // ===============================
    if (msg.type === "PRODUCT_ADDED") {
      addNotification(msg.message);

      // trigger refresh in Products page
      window.dispatchEvent(new Event("refresh-products"));
    }

    // ===============================
    // 🔔 PRODUCT UPDATED
    // ===============================
    if (msg.type === "PRODUCT_UPDATED") {
      addNotification(msg.message);
      window.dispatchEvent(new Event("refresh-products"));
    }

    // ===============================
    // 🔔 PRODUCT DELETED
    // ===============================
    if (msg.type === "PRODUCT_DELETED") {
      addNotification(msg.message);
      window.dispatchEvent(new Event("refresh-products"));
    }

  } catch (error) {
    console.error("❌ WebSocket parse error:", error);
  }
};

socket.onclose = () => {
  console.log("🔴 User WebSocket disconnected");
};

socket.onerror = (error) => {
  console.error("❌ WebSocket error:", error);
};
