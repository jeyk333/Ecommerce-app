import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { Styles } from "./styles";

const Footer = ({ classes }) => {
  return (
    <div className={classes.footer}>
      <Typography align="center">
        © 2020 Ecommerce. All rights reserved.
      </Typography>
    </div>
  );
};

export default withStyles(Styles)(Footer);
