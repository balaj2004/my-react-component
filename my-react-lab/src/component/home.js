import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
const products = [
{ id: 1, name: "Product 1" },
{ id: 2, name: "Product 2" },
{ id: 3, name: "Product 3" },
{ id: 4, name: "Product 4" },
 ];
  return (
<div>
<h1>Welcome to Our E-Commerce Platform</h1>
<p>Explore our products and enjoy shopping!</p>
<h2>Product Catalog</h2>
<ul>
{products.map((product) => (
<li key={product.id}>
<Link to={`/product/${product.id}`}>{product.name}</Link>
</li>
))}
</ul>
</div>
  );
};

export default Home;

