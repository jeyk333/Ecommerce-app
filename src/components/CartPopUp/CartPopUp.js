import React from "react";
import { withStyles, Dialog, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Styles } from "./styles";
import { getProductsCount, getTotalCost } from "../../utils";
import CartProductCard from "../CartProductCard";

const CartPopUp = ({
  classes,
  handleClose,
  open,
  addedProducts,
  totalQty,
  removeProduct,
}) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth
    >
      <div className={classes.card}>
        <Close className={classes.close} onClick={handleClose} />
        {addedProducts.length > 0 ? (
          <div className={classes.cardCover}>
            <div className={classes.cartTitleCover}>
              <Typography className={classes.title}>
                Your Cart ({getProductsCount(totalQty)})
              </Typography>
              <Typography className={classes.title}>
                Total: ₹{getTotalCost(addedProducts)}
              </Typography>
            </div>
            {addedProducts.map((product) => (
              <CartProductCard
                product={product}
                key={product.id}
                removeProduct={removeProduct}
              />
            ))}
          </div>
        ) : (
          <Typography>No Items in the Cart</Typography>
        )}
      </div>
    </Dialog>
  );
};

export default withStyles(Styles)(CartPopUp);
