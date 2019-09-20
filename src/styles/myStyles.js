import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: " 2%"
  },

  heading: {
    textAlign: "center",
    color: "#124559"
  },

  subheading: {
    textAlign: "center",
    color: "#9EC1A3"
  },

  flex: {
    display: "flex",
    padding: "5px"
  },
  topicsWindow: {
    width: "30%",
    height: "600px",
    borderRight: "0.5px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "600px"
  },
  chatBox: {
    width: "90%",
    padding: "10px"
  },
  button: {
    width: "10%",
    padding: "10px"
  },
  message: {
    padding: "5px",
    marginRight: "10px"
  }
}));
