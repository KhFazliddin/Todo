import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/action/todo';


const Header = ({ addTodo }) => {
    const [value, setValue] = useState('');
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo"
                placeholder="What needs to be done?"
                autofocus
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyDown={event => {
                    if (event.keyCode === 13 && value !== '') {
                        addTodo(value);
                        setValue('');
                    }
                }}
            />
        </header>
    )
};

const mapDispatchToProps = ({
    addTodo
})



export default connect(null, mapDispatchToProps)(Header);
