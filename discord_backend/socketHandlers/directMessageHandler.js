const Conversation = require("../models/conversation");
const Message = require("../models/message");
const chatUpdate = require("./updates/chat");

const directMessageHandler = async (socket, data) => {
  try {
    console.log("direct message event is being handled");

    const { userId } = socket.user;
    const { receiverUserId, content } = data;

    // create new message
    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT",
    });
   
    // find if conversation exist with this tow users - if not create new
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });
    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();

      // perform and update to sender and receiver if is online
      chatUpdate.updateChatHistory(conversation._id.toString());
    } else {
      // create new conversation if not exists
      const newConversation = await Conversation.create({
        participants: [userId, receiverUserId],
        messages: [message._id],
      });

      // perform and update to sender and receiver if is online
      chatUpdate.updateChatHistory(newConversation._id.toString());
      
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directMessageHandler;
