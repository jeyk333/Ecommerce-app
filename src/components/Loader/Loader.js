import React from "react";
import { withStyles, CircularProgress } from "@material-ui/core";
import { Styles } from "./styles";

const Loader = ({ classes }) => {
  return (
    <div className={classes.loaderCover}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};

export default withStyles(Styles)(Loader);
