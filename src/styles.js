import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down('xs')]: {
    appBar: {
      justifyContent: "space-between"
    },
    heading: {
      width: "35%",
      boxSizing: "border-box",
    },
    image: {
      boxSizing: "border-box",
      width: "20%",
      height: "auto"
    },
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
  

}));

