import { useEffect, useState, useRef } from "react"

const Timer = () => {
    const [timer, setTimer] = useState(0)
    let { cuerrent: timerId } = useRef(null)
    const [state, setState] = useState(false)


    const fun = () => {
        timerId = setInterval(() => {
            setTimer(p => p + 1)
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }
    useEffect(() => {
    }, [timer])

    const handleClick = () => {
        clearInterval(timerId)
        if (!state) {
            fun()
            setState(p=>!p)
        } else {
            clearInterval(timerId)
        }
    }
    return (
        <>
            <div>{timer}</div>
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default Timer
