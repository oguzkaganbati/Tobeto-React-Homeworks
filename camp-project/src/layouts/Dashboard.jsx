import React from "react";
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router";
import ProductDetails from "../pages/ProductDetails";

const Dashboard = () => {
  return (
    <div>
      <Navi />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" Component={ProductList}/>
              <Route exact path="/products" Component={ProductList}/>
              <Route path="products/:id" Component={ProductDetails}/>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Dashboard;
