import React from 'react';


const Todoitem = ({ title, completed, deleteTodo, completeTodo }) => {
    return (
        <li class={completed && 'completed'}>
            <div class="view">
                <input onClick={completeTodo} class="toggle" type="checkbox" checked={completed} />
                <label>{title}</label>
                <button onClick={deleteTodo} class="destroy" />
            </div>
        </li>
    )
};



export default Todoitem;