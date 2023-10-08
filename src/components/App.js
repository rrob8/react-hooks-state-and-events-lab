import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [isOn, switchIsOn ] = useState(false) 
  
  function darkMode () {
  
    return   switchIsOn(!isOn)
    
  }

  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> darkMode()}> Dark Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
