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
    }, 1000);
  
    return () => {
      clearInterval(interval);
    }  
  })

  return (
    <div className={styles.slide}>
      {facts[count].fact}
    </div>
  )
}

export default Slider