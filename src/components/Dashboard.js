import React, { useState, useContext } from "react";
import { useStyles } from "../styles/myStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CTX } from "./Store";

const Dashboard = () => {
  const classes = useStyles(); // * For the styling and everything.
  //*Get the elemets from the context :
  const { chatRepo, sendChatAction, user } = useContext(CTX);
  //* Extract the topics :
  const topics = Object.keys(chatRepo);
  //*States:
  const [message, setMessage] = useState("");
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
    <div className="App">
      <Paper className={classes.root}>
        <Typography className={classes.heading} variant="h4">
          Socket Chat
        </Typography>
        <Typography className={classes.subheading} component="p">
          Welcome {user}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {//map over the topics :
              topics.map(topic => (
                <ListItem
                  button
                  onClick={event => setActiveTopic(event.target.innerText)}
                  key={topic}
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {chatRepo[activeTopic].map((chat, index) => (
              <div className={classes.flex} key={index}>
                <Chip label={chat.user} className={classes.chip} />
                <Typography className={classes.message} variant="caption">
                  {chat.message}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Message"
            className={classes.chatBox}
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              sendChatAction({
                user: user,
                message: message,
                topic: activeTopic
              });
              setMessage("");
            }}
            className={classes.button}
          >
            Post
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
