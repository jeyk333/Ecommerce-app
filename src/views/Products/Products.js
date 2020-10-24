import React from "react";
import { withStyles } from "@material-ui/core";
import Layout from "../../layout";
import { Styles } from "./styles";

const Products = ({ classes }) => {
  return (
    <div>
      <Layout>body</Layout>
    </div>
  );
};

export default withStyles(Styles)(Products);
