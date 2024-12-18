const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const serverStore = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username mail");

    // find if user of specified userId has active connections
    const receiverList = serverStore.getActiveConnections(userId);

    const io = serverStore.getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const updatefriends = async (userId) => {
  // find active connections of specific id (online users)
  const receiverList = serverStore.getActiveConnections(userId);

  if (receiverList.length > 0) {
    const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
      "friends",
      "_id username mail"
    );

    if (user) {
      const friendsList = user.friends.map((friend) => {
        return {
          id: friend._id,
          username: friend.username,
          mail: friend.mail,
        };
      });

      // get io server instance
      const io = serverStore.getSocketServerInstance();

      receiverList.forEach((receiverSocketId) => {
        io.to(receiverSocketId).emit("friends-list", {
          friends: friendsList ? friendsList : [],
        });
      });
    }
  }
};

module.exports = {
  updateFriendsPendingInvitations,
  updatefriends,
};
