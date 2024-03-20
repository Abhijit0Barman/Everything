import { useEffect, useRef } from "react"

export const DomRef = () => {
    // const inputRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null!)// if you are, SURE that the reference will be assigned a value. it will never null then you can add NON-NULL ASSERTION when invoking useRef after null add the Exclamation sign ``this allows us to call focus without optional chaining``--useRef hook for Dom-References

    useEffect(() => {
        // inputRef.current?.focus()
        inputRef.current.focus()

    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
            {/* <button onClick={() => { alert("Button clicked") }}>Click me</button> */}
        </div>
    )
}
