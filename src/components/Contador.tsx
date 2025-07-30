import React, { useState } from 'react';
import './Contador.css';

const Contador: React.FC = () => {
  const [count, setCount] = useState<number>(10);

  return (
    <div className="counter-app">
      <h1 className="counter-title">CONTADOR</h1>
      <div className="counter-display">{count}</div>
      
      <div className="counter-controls">
        <button 
          className="counter-btn" 
          onClick={() => setCount(c => c - 1)}
        >
          -
        </button>
        <button 
          className="counter-btn" 
          onClick={() => setCount(c => c + 1)}
        >
          +
        </button>
      </div>
      
      <button 
        className="btn-reset" 
        onClick={() => setCount(10)}
      >
        RESETAR
      </button>
    </div>
  );
};

export default Contador;