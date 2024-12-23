const { v4: uuidv4 } = require("uuid");
const connectedUsers = new Map();
let activeRooms = [];

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("new conncted user");
  console.log(connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("new conncted user");
    console.log(connectedUsers);
  }
};

const getActiveConnections = (userId) => {
  const activeConnections = [];

  connectedUsers.forEach((value, key) => {
    if (value.userId === userId) {
      activeConnections.push(key);
    }
  });

  return activeConnections;
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key) => {
    onlineUsers.push({ socketId: key, userId: value.userId });
  });

  return onlineUsers;
};

// rooms
const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };

  activeRooms = [...activeRooms, newActiveRoom];
  console.log("room active");
  console.log(activeRooms);

  return newActiveRoom;
};

const getActiveRoom = (roomId) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);

  if (activeRoom) {
    return { ...activeRoom };
  } else {
    return null;
  }
};

const getActiveRooms = () => {
  return [...activeRooms];
};

const joinActiveRoom = (roomId, newParticipant) => {
  const newActiveRooms = activeRooms.map((room) => {
    if (room.roomId === roomId) {
      return { ...room, participants: [...room.participants, newParticipant] };
    }
    return room;
  });

  activeRooms = newActiveRooms;

  console.log("new Active Rooms");
  console.log(activeRooms);
};

const leaveActiveRoom = (roomId, participantSocketId) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);

  if (activeRoom) {
    const copyOfActiveRoom = { ...activeRoom };

    copyOfActiveRoom.participants = copyOfActiveRoom.participants.filter(
      (participant) => participant.socketId !== participantSocketId
    );

    activeRooms = activeRooms.filter((room) => room.roomId !== roomId);

    if (copyOfActiveRoom.participants.length > 0) {
      activeRooms.push(copyOfActiveRoom);
    }
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers,
  addNewActiveRoom,
  getActiveRoom,
  getActiveRooms,
  joinActiveRoom,
  leaveActiveRoom,
};
