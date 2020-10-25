import React from "react";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import { Styles } from "./styles";

const ProductCard = ({ classes, product, handleAddToCart }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} key={product.id}>
      <div className={classes.card}>
        <img src={product.image} alt={product.name} />
        <div className={classes.details}>
          <Typography className={classes.name}>{product.name}</Typography>
          <Typography className={classes.description}>
            {product.description}
          </Typography>
          <Typography className={classes.price}>Rs. {product.price}</Typography>
          <Typography className={classes.description}>
            Qty: {product.quantity}
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            className={classes.button}
            onClick={() => handleAddToCart(product)}
            disabled={product.quantity === 0}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default withStyles(Styles)(ProductCard);
