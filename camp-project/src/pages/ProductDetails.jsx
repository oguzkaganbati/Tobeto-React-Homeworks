import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/productService";
import ProductDetailCard from "../components/ProductCard/ProductDetailCard";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductById(id)
      .then((result) => setProduct(result.data));
  }, []);
  return (
    <ProductDetailCard product={product}/>
  );
}