import React, { useReducer, createContext } from "react";
import io from "socket.io-client";

export const CTX = createContext(); //Init a context provider.

//*Initial State of the messages in the discussion:
const initialState = {
  Football: [{ user: "ChatBot", message: "Who's gonna win UCL this year?" }],
  Team101: [{ user: "ChatBot", message: "Exclusive for Team 101 !" }],
  Social: [{ user: "ChatBot", message: "Let's get social !!" }],
  Travel: [{ user: "ChatBot", message: "I'm saving for Europe Trip :)" }],
  Tech: [{ user: "ChatBot", message: "Yo, iPhone 11 Pro is slick, bruh !" }],
  Science: [{ user: "ChatBot", message: "I'm not so good at it :D" }],
  Coding: [{ user: "ChatBot", message: "Declare variables not war" }]
};

//*Create a random user:
const user = "User" + Math.floor(Math.random() * Math.floor(100));

//*Reducer to post and update messages:
const reducer = (state, action) => {
  const { user, message, topic } = action.payload;
  switch (action.type) {
    case "POST_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { user, message }]
      };
    default:
      return state;
  }
};

//* Socket Object :
let socket;

//* Dispatch a Chat Action:
const sendChatAction = value => {
  socket.emit("chat message", value);
};

const Store = props => {
  const [chatRepo, dispatch] = useReducer(reducer, initialState);

  //*Init the socket object
  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", function(msg) {
      //Add the message to the list
      dispatch({ type: "POST_MESSAGE", payload: msg.msg });
    });
  }

  //*Pass the elements to the application state :
  return (
    <CTX.Provider value={{ chatRepo, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
};

export default Store;
