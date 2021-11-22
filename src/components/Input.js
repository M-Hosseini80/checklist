import React, { useState } from 'react'
import uuid from 'react-uuid'

export default function Input({ setInputText, Tasks, setTasks, InputText }) {

    // const [htmlId] = useId();
    const [color, setColor] = useState("blue");
    const colorHandler = (e) => {
        setColor(e.target.value)
    }
    const InputHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(e)
        setTasks([
            ...Tasks,
            { text: InputText, completed: false, id: uuid(), color: color }

        ]);

        setInputText("");
    }


    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input value={InputText} onChange={InputHandler} type="text" placeholder="write your task.." />
                <select onChange={colorHandler} >
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="black">black</option>
                </select>
                <button type="submit">send!</button>
            </form>
        </div>
    )
}
