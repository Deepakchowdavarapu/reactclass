import React, { useState } from 'react'; // Step 1: Import useState
import store from './store';
import logo from './logo.svg';
import './App.css';
import {a, b} from './components/Products/Products';
import Products from './components/Products/Products';

function App() {


  const [countA, setCountA] = useState(a); // Assuming 'a' is a number

  // Step 3: Create increment and decrement functions
  const incrementA = () => setCountA(prevCount => prevCount + 1);
  const decrementA = () => setCountA(prevCount => prevCount - 1);

  console.log(countA);

  let[cart, setCart] = useState({});

    <div>
      <div>App</div>
      <div>
        <button onClick={incrementA}>Increment A</button>
        <button onClick={decrementA}>Decrement A</button>
        <div>Count A: {countA}</div>
      </div>
    </div>

    function increaseQuantity(){
      const newcart = {...cart};

      if(!newcart[Product.id]){
        newcart[Product.id] = {
          ...Product,
          quantity: 0
        };
      }
      newcart[Product.id].quantity++;
      console.log(newcart);
      setCart(newcart);
    }
}

export default App;