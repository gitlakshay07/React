import React from 'react'
import { useState } from 'react';

const Usestat = () => {
    const [count, setCount] = useState(0);
    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => setCar((prevState) => {
      return {...prevState, color: "blue"}
    });
  
    return ( 
      <div>
        <h1>useState</h1>
        <div className="useState">
            <h1>{count}</h1> {/* Reading Value */}
            <button onClick={inc}>+inc</button>  {/* Updating Value */}
            <button onClick={dec}>-dec</button>
            <hr />
  
            <h1>{car.brand}</h1>
            <p>
              It is a {car.color}, {car.model} from {car.year};
            </p>
            <button onClick={updateColor}>
              Show blue
            </button>
            <hr />
        </div>
  
      </div>
    )
}

export default Usestat;