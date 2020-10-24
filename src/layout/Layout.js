import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./styles";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default withStyles(Styles)(Layout);
