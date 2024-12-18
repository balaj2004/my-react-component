import React, { useState } from "react";

const ShopingCart = () => {
   const [items, setItems] = useState([]);
   const [totalcost, setTotalCost] = useState(0);

   const addToCart = (item, price) => {
       setItems([...items, item]);
       setTotalCost(totalcost + price);
   }
   const removeFromCart = (item, price) => {
       setItems(items.filter((i) => i !== item));
       setTotalCost(totalcost - price);
   }

   return (
       <div>
           <h2>Shopping Cart</h2>
           <p>Total Cost: {totalcost}</p>
           <button onClick={() => addToCart("Item 1", 10)}>Add Item 1</button>
           <button onClick={() => addToCart("Item 2", 20)}>Add Item 2</button>
           <button onClick={() => removeFromCart("Item 1", 10)}>Remove Item 1</button>
           <button onClick={() => removeFromCart("Item 2", 20)}>Remove Item 2</button>
       </div>
   );
}

export default ShopingCart;