import React, { useState } from 'react';
import TodoForm from './TodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import { TiEdit } from 'react-icons/ti';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';

function Todo({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (

        <
        div className = { todo.isComplete ? 'todo-row complete' : 'todo-row' }
        key = { index } >
        <
        div key = { todo.id }
        onClick = {
            () => completeTodo(todo.id)
        } > { todo.text } < /div>

        <
        div className = 'icons' >

        <
        DeleteIcon onClick = {
            () => removeTodo(todo.id)
        }
        className = 'delete-icon' / >

        <
        /div>  <
        /div>
    ));
};

export default Todo;