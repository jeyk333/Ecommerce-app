import React, { useState, useEffect } from "react";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import axios from "axios";
import Layout from "../../layout";
import { Styles } from "./styles";

const Products = ({ classes }) => {
  const [AllProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios(
      "https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730"
    ).then((resp) => setAllProducts(resp.data.data));
  }, []);
  console.log(AllProducts);
  return (
    <div>
      <Layout>
        <div className={classes.products}>
          <Typography className={classes.title}>Products</Typography>
          <Grid container justify="center" spacing={6}>
            {AllProducts && AllProducts.length > 0
              ? AllProducts.map((product) => (
                  <Grid item xs={12} sm={12} md={4} lg={3} key={product.id}>
                    <div className={classes.card}>
                      <img src={product.image} alt={product.name} />
                      <div className={classes.details}>
                        <Typography className={classes.name}>
                          {product.name}
                        </Typography>
                        <Typography className={classes.description}>
                          {product.description}
                        </Typography>
                        <Typography className={classes.price}>
                          Rs. {product.price}
                        </Typography>
                        <Typography className={classes.description}>
                          Quantity: {product.quantity}
                        </Typography>
                        <Button
                          fullWidth
                          variant="outlined"
                          className={classes.button}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </Grid>
                ))
              : "No products to display"}
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default withStyles(Styles)(Products);
