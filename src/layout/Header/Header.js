import React from "react";
import { withStyles, AppBar, Toolbar, Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Styles } from "./styles";
import Logo from "../../assets/images/logo.svg";

const Header = ({ classes, totalQty, handleOpen }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.root}>
          <div className={classes.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <Badge
            badgeContent={totalQty}
            color="secondary"
            showZero
            onClick={handleOpen}
            className={classes.icon}
          >
            <ShoppingCartOutlined
              className={classes.icon}
              onClick={handleOpen}
            />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(Styles)(Header);
