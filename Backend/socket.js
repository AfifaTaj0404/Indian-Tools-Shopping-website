let wss = null;

exports.initWebSocket = (webSocketServer) => {
  wss = webSocketServer;
};

exports.getWSS = () => {
  return wss;
};
