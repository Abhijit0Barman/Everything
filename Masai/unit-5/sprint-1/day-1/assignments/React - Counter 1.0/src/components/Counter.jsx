import React, { useState } from "react"

const Counter = ({ initCount }) => {
    const [count, setCount] = useState(initCount)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleReduce = () => {
        setCount(count - 1)
    }
    const handleDouble = () => {
        setCount(count * 2);
    };
    return (
        <div>
            <h2 data-testid="counter-header">Counter</h2>
            <h3 data-testid="count">{count}</h3>
            <button data-testid="add-btn" onClick={handleAdd}>+</button>
            <button data-testid="subtract-btn" onClick={handleReduce}>-</button>
            <button data-testid="double-btn" onClick={handleDouble}>Double</button>
        </div>
    )
}

export default Counter