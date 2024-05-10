import { useRef } from 'react';

const AutoFocus = () => {
    const inputs = Array.from({ length: 5 }, () => useRef(null))
    // const inputs = Array(5).fill(0).map((_,i)=> useRef(null))
    // const inputs = [...Array(5)].map((_, i) => useRef(null))
    /*
    const inputs = [];
    for (let i = 0; i < 5; i++) {
    inputs.push(useRef(null));
    }
    */
    const handleInput = (index, e) => {
        if (e.target.value.length >= 10) {
            if (index < inputs.length - 1) {
                inputs[index + 1].current.focus();
            }
        }
    };
    
    return (
        <>
            <div >
                <form>
                    {inputs.map((item, index) => (
                        <input
                            key={index}
                            ref={item}
                            type="text"
                            maxLength="10"
                            autoFocus={index === 0}
                            onChange={(e) => handleInput(index, e)}
                        />
                    ))}
                </form>
            </div>
        </>
    );
}
export default AutoFocus