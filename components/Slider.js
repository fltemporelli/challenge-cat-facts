import styles from './Slider.module.css'
import React, { useState, useEffect } from 'react';

const Slider = ({ facts }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      if (count < 20) {
        setCount((c) => c + 1) 
      }
      else {
        setCount(0);
      }
    }, 6000);
  
    return () => {
      clearInterval(interval);
    }  
  })

  return (
    <div className={styles.slide}>
      <p>{facts[count].fact}</p>
    </div>
  )
}

export default Slider