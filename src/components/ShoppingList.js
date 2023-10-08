import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

let [selectedCategory, switchFilter] = useState('All')


function filterFunction(event) {
  switchFilter(event.target.value)
  
}
console.log(selectedCategory)

const foodsToDisplay = items.filter((food)=>{
  if (selectedCategory == 'All') {
    return true
  } else {
    return food.category === selectedCategory
  }

})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
         onChange={(event)=>filterFunction(event)}
         name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
