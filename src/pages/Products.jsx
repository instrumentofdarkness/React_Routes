import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = "https://fakestoreapi.com/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
    const response = await fetch(url)
    const result = await response.json()
    setProducts(result);
    }
    getProducts();
  }, [])
  console.log(products, "product from ProductList")
  return (
    <div>
      <h1>Products</h1>
      <div className="products">

        {products.map((product) => 
          <>
          <div key={product.id}> 
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>
            <button>Go to product detail</button>
            </Link>
          </div>
          </>
        )}
      </div>
    </div>
  )
}
