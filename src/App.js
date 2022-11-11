import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  function addItem(name, iPrice) {
    var itemName = name;
    var itemPrice = iPrice;
    let origCart = cart;
    var isPresent = false;

    for (let i = 0; i < origCart.length; i++){
      if (origCart[i][0] === name) {
        isPresent = true;
      }
    }

    if (isPresent === true) {
      for (let i = 0; i < origCart.length; i++) {
        if (origCart[i][0] === itemName) {
          origCart[i][1] = origCart[i][1] + 1;
        }
      }
    }

    else {
      origCart.unshift([name, 1])
    }

    setCart(origCart)
    setPrice(price + itemPrice)
  }


  return (
    <div className="App">

      <h1>Chris's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <h2>Our Items</h2>
      <div className="whole">
      <div className="display">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div className="BakeryItem">
          <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} />
          <button className="myButton" onClick={() => { addItem(item.name, item.price) }}>Add To Cart</button>
          </div> // replace with BakeryItem component
      ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        Total: ${price.toFixed(2)}
        {cart.map((item, index) => (
          <div>
            {item[1]}x {item[0]}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

function handleClick(){

}

export default App;
