import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"


const Print = () => {
    let [state, setState] = useState(1)
    let { current } = useRef(null)


    useEffect(() => {
        current = setInterval(() => {
            // for(let i=1;i<=5;i++){
            //     console.log(i);
            // }

            if (state == 5) {
                setState(0)
            }
            setState(p => p + 1)
            console.log(state);

        }, 1000)

        return () => {
            clearInterval(current)
        }

    }, [state])


    return (
        <div>

        </div>
    )
}

export default Print
