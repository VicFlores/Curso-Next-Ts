import { NextPage } from 'next';
import React, { useState } from 'react';

const Counter: NextPage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (number: number): void => {
    setCounter(counter + number);
  };

  return (
    <div className="mt-5">
      <h3>Counter </h3>
      <br />
      <span>Valor: {counter} </span>
      <br />

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => handleIncrement(1)}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => handleIncrement(2)}
      >
        +2
      </button>

      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
