import { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="counter-title">React Counter App</h1>
        <p className="counter-value">{count}</p>
        <div className="counter-buttons">
          <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
          <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CounterApp
