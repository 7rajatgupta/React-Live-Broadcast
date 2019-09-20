import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "30px"
  },

  centerText: {
    textAlign: "center"
  },

  flex: {
    display: "flex",
    alignItems: "center",
    padding: "5px"
  },
  topicsWindow: {
    width: "30%",
    height: "500px",
    borderRight: "0.5px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "500px",
    padding: "10px"
  },
  chatBox: {
    width: "85%",
    padding: "10px"
  },
  button: {
    width: "15%",
    padding: "10px"
  },
  message: {
    padding: "5px"
  }
}));
