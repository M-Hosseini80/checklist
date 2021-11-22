import React from 'react'
import { useId } from "react-id-generator";

export default function Input({ setInputText, Tasks, setTasks, InputText }) {

    const [htmlId] = useId();

    const InputHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(e)
        setTasks([
            ...Tasks,
            { text: InputText, completed: false, id: htmlId }

        ]);

        setInputText("");
    }


    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input value={InputText} onChange={InputHandler} type="text" placeholder="write your task.." />
                <select>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>black</option>
                </select>
                <button type="submit">send!</button>
            </form>
        </div>
    )
}
