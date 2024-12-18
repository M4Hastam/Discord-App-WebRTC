import { styled } from "@mui/material";
import React from "react";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import { useSelector } from "react-redux";
import DateSeparator from "./DateSeparator";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format?.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

function Messages({ chosenChatDetails }) {
  const { messages } = useSelector((state) => state.chat);

  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "yy/mm/dd") ==
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "yy/mm/dd"
            );
        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  "yy/mm/dd"
                )}
              />
            )}
            <Message
              content={message.content}
              username={message.author.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "yy/mm/dd"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
}

export default Messages;
