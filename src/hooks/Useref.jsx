import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Useref = () => {

    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        },1000);

        return () => clearInterval(intervalRef.current);
    });
    // Useref having a current property inside object therfore intervalRef.current use in this way which alter the state without refresh

  return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={() => intervalRef.current = setInterval(() => setCount((prevCount) => prevCount + 1), 1000)}>Start</button>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Useref