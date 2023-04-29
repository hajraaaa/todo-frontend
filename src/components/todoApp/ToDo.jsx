import React from 'react'
import { FcList } from "react-icons/fc";
import logo from '.././TODO.png'
import { useState } from 'react'
import ToDoItems from './ToDoItems'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slice/todoSlice';

const ToDo = () => {
    const dispatch = useDispatch()

    const [todoList, setToDoList] = useState({
        title: '',
        date: ''
    })

    const handleChange = (event) => {
        setToDoList(pre => ({ ...pre, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(todoList);
        dispatch(addTask(todoList))
    }

    return (<>
        <div className='container gap-3 my-5 d-sm-flex flex-sm-row'>

            <div className='container d-flex flex-column mx-auto align-items-center'>
                <h1>ToDo App <FcList /></h1>

                <input className="rounded my-2 w-29 p-2" type="text" name="title" placeholder='Enter your task' value={todoList.title} onChange={handleChange} />

                <input className="rounded my-3 w-29 p-2" type="date" name="date" value={todoList.date} onChange={handleChange} />

                <button className="btn btn-primary w-25 p-3 " onClick={handleSubmit} >Add Task</button>

            </div>
            <div className='container d-none d-sm-block'>
                <img src={logo} alt="logo" style={{ height: "100%", width: "50%" }} />
            </div>

        </div>

        <ToDoItems />
    </>)
}

export default ToDo
