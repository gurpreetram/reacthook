import React, { useRef } from "react";

const UseRefHook = () => {

    const refHook = useRef();

    const handleChange = () => {
        refHook.current.style.padding = "300px"
    }

    console.log(refHook);
    return (
        <>
            <h1>userefhook</h1>
            <input type="text" placeholder="Enter your name" ref={refHook} />
            <button onClick={handleChange}>Submit Here!</button>
        </>
    )
};

export default UseRefHook;