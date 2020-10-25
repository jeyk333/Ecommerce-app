import React from "react";
import { withStyles, Snackbar, IconButton, Slide } from "@material-ui/core";
import { Style } from "./styles";
import { Close } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SnackBar = ({ classes, isSuccess, isFailed, handleClose, label }) => {
  let open = isSuccess || isFailed;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      ContentProps={{
        className: `${classes.snackBarContent} ${
          isFailed ? classes.failed : null
        }`,
      }}
      TransitionComponent={Transition}
      message={label}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default withStyles(Style)(SnackBar);
