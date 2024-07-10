import React, { useState, useEffect } from 'react';

const Counter = ({ start, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 0.9); // Update count every 1 second
      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [count, end]);

  return (
   
      <span>{count}</span>
   
  );
};

export default Counter;
