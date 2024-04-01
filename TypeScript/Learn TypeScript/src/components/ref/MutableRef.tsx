import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    // const interValRef = useRef<number | undefined>(undefined)
    //                                  or
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        // window.clearInterval(interValRef.current)
        //                          or
        if (interValRef.current !== null) {
            window.clearInterval(interValRef.current)
        }
    }
console.log(`render`);

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])
    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}
