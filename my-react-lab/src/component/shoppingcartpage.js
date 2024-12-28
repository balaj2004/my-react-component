import React, { useState } from "react";
import './shoppingcart.css';
const ShoppingCartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };
  const removeFromCart = (productToRemove) => {
    const newCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(newCart);
    setTotal(total - productToRemove.price);
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <>
          <p>Your shopping cart contains {cart.length} item(s).</p>
          <p>Total: ${total}</p>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Available Products</h2>
      <div>
        <p>{products[0].name} - ${products[0].price}</p>
        <button onClick={() => addToCart(products[0])}>Add to Cart</button>
      </div>
      <div>
        <p>{products[1].name} - ${products[1].price}</p>
        <button onClick={() => addToCart(products[1])}>Add to Cart</button>
      </div>
      <div>
        <p>{products[2].name} - ${products[2].price}</p>
        <button onClick={() => addToCart(products[2])}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
