import React from 'react'
import Item from './Item'
import './Lists.css'
export default function Lists({ Tasks, setTasks, filter }) {
    return (
        <div className="lists">
            {
                filter.map(task => (
                    <Item checked={task.completed} text={task.text} color={task.color} keyVal={task.id} key={task.id} setTasks={setTasks} Tasks={Tasks} />
                ))
            }
        </div>
    )
}
