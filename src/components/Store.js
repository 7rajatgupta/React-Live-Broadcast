import React, { useReducer, createContext } from "react";
import io from "socket.io-client";

export const CTX = createContext(); //Init a context provider.

//*Initial State of the messages in the discussion:
const initialState = {
  Football: [
    { user: "Ronaldo", message: "I'm the best of all time" },
    { user: "Messi", message: "Please help me to win Champions League" },
    { user: "Neymar", message: "Se queda ?" },
    { user: "Ramos", message: "Busy shooting my new documentary" },
    { user: "Zidane", message: "I believe in this Real Madrid squad." },
    { user: "Hazard", message: "Cristiano who ?" },
    { user: "James", message: "It's my season at Real Madrid." }
  ],
  General: [
    { user: "Ed", message: "Hey Check me out, I'm so general." },
    { user: "Ed", message: "Hey Check me out, I'm so general." },
    { user: "Ed", message: "Hey Check me out, I'm so general." },
    { user: "Ed", message: "Hey Check me out, I'm so general." },
    { user: "Ed", message: "Hey Check me out, I'm so general." },
    { user: "Ed", message: "Hey Check me out, I'm so general." }
  ],
  Development: [
    { user: "Anonymous", message: "We shall overcome everyone.." },
    { user: "Anonymous", message: "We shall overcome everyone.." },
    { user: "Anonymous", message: "We shall overcome everyone.." },
    { user: "Anonymous", message: "We shall overcome everyone.." },
    { user: "Anonymous", message: "We shall overcome everyone.." }
  ]
};

//*Reducer:
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

//* Socket :
let socket;

//* Dispatch a Chat Action:

const sendChatAction = value => {
  socket.emit("chat message", value);
};

const Store = props => {
  if (!socket) {
    socket = io(":3001");
  }

  const [chatRepo, dispatch] = useReducer(reducer, initialState);

  return (
    <CTX.Provider value={{ chatRepo, sendChatAction }}>
      {props.children}
    </CTX.Provider>
  );
};

export default Store;
