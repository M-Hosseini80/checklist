import React from 'react';
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
        console.log(e)
    }
    return (
        <div>
            <input onChange={onChangeHandler} type="checkbox" id={props.keyVal} key={props.keyVal} checked={props.checked && "checked"} />
            <label htmlFor={props.keyVal}>{props.text}</label>
            <span className="color" style={{ background: props.color }}></span>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
