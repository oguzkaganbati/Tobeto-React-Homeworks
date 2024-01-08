import React, { useState, useEffect } from "react";
import ProductService from "../services/productService";
import { GridColumn, GridRow, Grid } from "semantic-ui-react";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.products));
  }, []);

  return (
    <div>
      <Grid>
        <GridRow>
          {products.map((product) => (
            <GridColumn key={product.id} width={5}>
              <ProductCard product={product}/>
            </GridColumn>
          ))}
        </GridRow>
      </Grid>
    </div>
  );
};

export default ProductList;
