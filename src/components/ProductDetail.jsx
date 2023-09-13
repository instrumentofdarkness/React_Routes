import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const result = useParams();

  const [productDetail, setProductDetail] = useState({});

  const url = `https://fakestoreapi.com/products/${result.id}`;

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(url);
      const result = await response.json();
      setProductDetail(result);
    }
    getProduct();
  }, []);

  return <div>{productDetail.title}</div>;
}
