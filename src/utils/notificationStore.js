let listeners = [];
let notifications = [];

export const addNotification = (text) => {
  const id = Date.now();

  const item = { id, text };
  notifications = [item, ...notifications];
  listeners.forEach((l) => l([...notifications]));

  // ⏱ Auto remove after 60 sec (1 minute)
  setTimeout(() => {
    notifications = notifications.filter((n) => n.id !== id);
    listeners.forEach((l) => l([...notifications]));
  }, 60000);
};

export const subscribe = (listener) => {
  listeners.push(listener);
  listener([...notifications]);
};

