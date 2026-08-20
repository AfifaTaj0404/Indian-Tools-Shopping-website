import { useEffect, useState } from "react";
import { subscribe } from "../utils/notificationStore";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    subscribe(setNotifications);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 20,
        width: "320px",
        zIndex: 999,
      }}
    >
      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            background: "#111",
            color: "white",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
          }}
        >
          🔔 {n.text}
        </div>
      ))}
    </div>
  );
}


