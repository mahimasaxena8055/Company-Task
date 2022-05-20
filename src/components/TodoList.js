import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import logo from '../images/spottbabl.jpg';
// import { CMultiSelect } from '@coreui/react-pro';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const LOCAL_STORAGE_KEY = "react-do-list-todos";

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storageTodos) {
            setTodos(storageTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const Add_CSM = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    };
    //  const options = [
    //     {
    //       value: 0,
    //       text: 'Angular',
    //     },
    //     {
    //       value: 1,
    //       text: 'Bootstrap',
    //     },
    //     {
    //       value: 2,
    //       text: 'React.js',
    //     },
    //     {
    //       value: 3,
    //       text: 'Vue.js',
    //     },
    //     {
    //       label: 'backend',
    //       options: [
    //         {
    //           value: 4,
    //           text: 'Django',
    //         },
    //         {
    //           value: 5,
    //           text: 'Laravel',
    //         },
    //         {
    //           value: 6,
    //           text: 'Node.js',
    //         },
    //       ],
    //     },
    //   ]

    return ( < >
        <
        nav >
        <
        a href = "#"
        to = '/'
        className = 'logo' >
        <
        img src = { logo }
        alt = 'logo' / >
        <
        /a> <lebel classname = 'menu-icon' for = 'menu-btn' > <
        span classname = 'nav-icon' >
        <
        /span> </lebel > < div className = "items1" >
        <
        h1 > YOUR SPOTTABL TEAM < /h1>  <
        h3 > Spottbabl supports you all throughout < /h3>  <
        /div> </nav > < div className = "container1" >
        <
        div >
        <
        h5 > Customer Success Managers < br / >
        <
        /h5>  </div > < div >
        <
        TodoForm onSubmit = { Add_CSM }
        /> 

        <
        Todo todos = { todos }
        completeTodo = { completeTodo }
        removeTodo = { removeTodo }
        />


        <
        /div>  <
        /div> { /* <CMultiSelect options={options} /> */ } <
        />

    );
}

export default TodoList;