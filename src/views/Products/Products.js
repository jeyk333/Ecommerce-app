import React, { useState, useEffect } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import Layout from "../../layout";
import { Styles } from "./styles";
import CartPopUp from "../../components/CartPopUp";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";
import SnackBar from "../../components/SnackBar";

const Products = ({ classes }) => {
  const [AllProducts, setAllProducts] = useState([]);
  const [AddedProducts, setAddedProducts] = useState([]);
  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [IsSuccess, setIsSuccess] = useState(false);
  const [IsRemoved, setIsRemoved] = useState(false);

  //to get all products
  useEffect(() => {
    setIsLoading(true);
    axios("https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730")
      .then((resp) => {
        setAllProducts(resp.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (value) => {
    //to decrease the qunatity in all products
    let existingProducts = AllProducts.map((product) => {
      if (product.id === value.id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setAllProducts(existingProducts);

    //to increase the qunatity in all products
    if (AddedProducts.some((product) => product.id === value.id)) {
      let addedProducts = AddedProducts.map((product) => {
        if (product.id === value.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setAddedProducts(addedProducts);
    } else {
      //to add new item to the cart
      let newProducts = [...AddedProducts, { ...value, quantity: 1 }];
      setAddedProducts(newProducts);
    }

    setIsSuccess(true);
  };

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleOpenPopUp = () => {
    setOpenPopUp(true);
  };

  const removeProduct = (value) => {
    //to remove item from the cart
    let products = AddedProducts.filter((product) => product.id !== value.id);
    setAddedProducts(products);

    //to update the quantity after the removal
    let allProduts = AllProducts.map((product) => {
      if (product.id === value.id) {
        return {
          ...product,
          quantity: Number(product.quantity) + Number(value.quantity),
        };
      }
      return product;
    });
    setAllProducts(allProduts);
    setIsRemoved(true);
  };

  //To get total quantity of added products in cart
  let totalQty = AddedProducts.reduce(
    (total, value) => total + value.quantity,
    0
  );

  const handleMessage = (IsSuccess, IsRemoved) => {
    if (IsSuccess) {
      return "Product added to the cart successfully";
    }
    if (IsRemoved) {
      return "Product removed from the cart successfully";
    }
  };

  const handleCloseSnackBar = () => {
    setIsSuccess(false);
    setIsRemoved(false);
  };

  return (
    <div>
      {IsLoading && <Loader />}
      <Layout handleOpen={handleOpenPopUp} totalQty={totalQty}>
        <div className={classes.products}>
          <Typography className={classes.title}>Products</Typography>
          <Grid container justify="center" spacing={6}>
            {AllProducts && AllProducts.length > 0
              ? AllProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              : "No products to display"}
          </Grid>
        </div>
      </Layout>
      <CartPopUp
        handleClose={handleClosePopUp}
        open={OpenPopUp}
        addedProducts={AddedProducts}
        totalQty={totalQty}
        removeProduct={removeProduct}
      />
      <SnackBar
        isSuccess={IsSuccess || IsRemoved}
        label={handleMessage(IsSuccess, IsRemoved)}
        handleClose={handleCloseSnackBar}
      />
    </div>
  );
};

export default withStyles(Styles)(Products);
