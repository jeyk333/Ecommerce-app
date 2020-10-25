import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./styles";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ classes, children, totalQty, handleOpen }) => {
  return (
    <div className={classes.root}>
      <Header totalQty={totalQty} handleOpen={handleOpen} />
      {children}
      <Footer />
    </div>
  );
};

export default withStyles(Styles)(Layout);
