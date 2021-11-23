import React, { useState } from 'react'
import uuid from 'react-uuid'
import './Input.css'
export default function Input({ setInputText, Tasks, setTasks, InputText, setStatus }) {

    // const [htmlId] = useId();
    const [color, setColor] = useState("white");
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
        InputText > " " && setTasks([
            ...Tasks,
            { text: InputText, completed: false, id: uuid(), color: color }

        ]);

        setInputText("");
    }


    const filterHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className="addNoteDiv">
            <select className="filter" name="filter" onChange={filterHandler}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
            <div>

            </div>
            <form className="addNote" onSubmit={SubmitHandler}>

                <input className="InputSe" dir="auto" value={InputText} onChange={InputHandler} type="text" placeholder="write your task.." />
                <select onChange={colorHandler} >
                    <option value="white">None</option>
                    <option value="green">Low</option>
                    <option value="brown">Medium</option>
                    <option value="red">High</option>
                </select>
                <input type="submit" className="submitNote" value="" />

            </form>


        </div>
    )
}
