import React, {useState} from "react";

function Item({ name, category }) {
  
  let [position, switchPosition] = useState('')

  function AddtoCart () {
    
   if (position === '') {

    return switchPosition(position = 'in-cart')
   }
   if (position === 'in-cart') {
    return switchPosition(position='')
   }
  }
  let add = 'Add to Cart'
  
  position =='' ? add = 'Add to Cart': add ='Remove from Cart'
  
  return (
    <li className={position}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick ={()=>AddtoCart()}
      className="add">{add}</button>
    </li>
  );
}

export default Item;
