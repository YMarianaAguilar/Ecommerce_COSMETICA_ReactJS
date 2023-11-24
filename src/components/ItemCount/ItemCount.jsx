import React from 'react'
import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="border  p-4">
      <div>
        <button className="mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

