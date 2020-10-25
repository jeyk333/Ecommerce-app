import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Styles } from "./styles";

const CartProductCard = ({ classes, product, removeProduct }) => {
  return (
    <div className={classes.card}>
      <Close className={classes.close} onClick={() => removeProduct(product)} />
      <Grid container>
        <Grid item xs={4}>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item xs={8}>
          <div className={classes.details}>
            <Typography className={classes.name}>{product.name}</Typography>
            <Typography className={classes.description}>
              {product.description}
            </Typography>
            <Typography className={classes.price}>
              Rs. {product.price}
            </Typography>
            <Typography className={classes.description}>
              Qty: {product.quantity}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(Styles)(CartProductCard);
