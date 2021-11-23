import React, { useState } from 'react';
// import { useId } from "react-id-generator";
import './Item.css'
export default function Item(props) {
    // const [htmlId] = useId();

    const deleteHandler = () => {
        props.setTasks(props.Tasks.filter((el) => el.id !== props.keyVal));
        // console.log(props.Tasks)
    }
    const onChangeHandler = (e) => {
        props.setTasks(props.Tasks.map(
            (item) => {
                if (item.id === props.keyVal) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            }
        ))
    }
    const [more, setMore] = useState("");
    const moreNote = (e) => {
        more === "" ? setMore("active") : setMore("")
        console.log(e)
    }
    return (
        <div className={`item ${more}`}>
            <input onChange={onChangeHandler} type="checkbox" key={props.keyVal} checked={props.checked && "checked"} />
            <label dir="auto" onClick={moreNote}>{props.text}</label>
            <span className="color" style={{ borderColor: props.color }}></span>
            <input type="button" onClick={deleteHandler} className="deleteIcon" />
        </div >
    )
}
