import { setMessages } from "../features/chatSlice";
import store from "../store";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of user from token and id from active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const userInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      userInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  userInConversation,
  messages,
}) => {
  const result = participants.every((participantId) => {
    return userInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
