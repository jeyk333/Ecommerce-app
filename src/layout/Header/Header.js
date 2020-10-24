import React from "react";
import { withStyles, AppBar, Toolbar } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Styles } from "./styles";
import Logo from "../../assets/images/logo.svg";

const Header = ({ classes }) => {
  return (
    <AppBar>
      <Toolbar>
        <div className={classes.root}>
          <div className={classes.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <ShoppingCartOutlined />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(Styles)(Header);
