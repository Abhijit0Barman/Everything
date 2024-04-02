import React, { useEffect, useRef, useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)
  const [value, setValue] = useState(false)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (value) {
        if(count==0)return 
        setCount(p => p - 1)
      }else{
        setCount(p => p + 1)
      }

      if (count == 9) {
        setValue(true)
      }

    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }


  }, [count])

  console.log(count);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default Demo

