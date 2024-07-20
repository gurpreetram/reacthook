import React, { useState } from "react";

const UseStatehook = () => {

    const [count , setCount]= useState(0);
const [colorChange, setColorChange] = useState({
        color: "red",
        car: "Thar",
        place: "Manali",
        hobbies: "Coding"
    });

    const changeColor = () => {
        setColorChange((prev) => {
            return {
                ...prev, place: "Kasmir",car:"Mercedes" 
                 // to update the object value we can use this method.
            }
        })
    } 

    return (
        <>
            <h1>useState Hook</h1>
            <h3> My favourite color is {colorChange.color} . The car I like is {colorChange.car}
                 . Favourite destinasion is {colorChange.place}. My Hobbies is {colorChange.hobbies} </h3>
                 <h3> Count :{count}</h3>
            <button onClick={changeColor}>Update</button>
            <button onClick={()=>{setCount(count + 1)}}> Count</button>
        </>
    )
}

export default UseStatehook;