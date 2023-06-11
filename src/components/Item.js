import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, editCart] = useState('add')

  function handleCart(e) {
    if (e.target.className === 'add') {
      editCart('remove')
    } else {
      editCart('add')
    }
  }

  const liClass = inCart === 'add' ? "" : "in-cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart} onClick={handleCart}>{inCart === 'add' ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
