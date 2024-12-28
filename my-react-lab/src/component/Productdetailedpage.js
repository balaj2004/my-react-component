import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
const { id } = useParams();
const products = [
{ id: 1, name: "Product 1", description: "This is Product 1" },
{ id: 2, name: "Product 2", description: "This is Product 2" },
{ id: 3, name: "Product 3", description: "This is Product 3" },
{ id: 4, name: "Product 4", description: "This is Product 4" },
];
const product = products.find((product) => product.id === parseInt(id));
return (
<div>
<h1>Product Details</h1>
{product ? (
<>
<h2>{product.name}</h2>
<p>{product.description}</p>
</>
) : (
<p>Product not found</p>
)}
</div>
);
};

export default ProductDetailPage;
