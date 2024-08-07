import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setIncart] = useState(false)

  const handleCart = () =>{
    setIncart((prevCart)=>!prevCart)
  }
  const liClassName = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
