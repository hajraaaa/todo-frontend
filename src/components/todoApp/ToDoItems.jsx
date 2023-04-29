import React from 'react'
// import { MdDelete } from "react-icons/md";
import { GiThink } from 'react-icons/gi'
import { useSelector } from 'react-redux';
// import { useDeleteItemsMutation, useGetAlltodoItemsQuery } from '../redux/service/todo.service'

const ToDoItems = () => {
    const { todo } = useSelector((state) => state.todo)
    return (
        <>
            <div className='container d-flex flex-column'>
                <h4>Task List <GiThink /></h4>
                {
                    todo?.map((x) => (
                        <div className='d-flex align-items-center justify-items-center mx-2 gap-3 mb-2' key={x.id} style={{ height: '35px', color: '#005c99' }}>
                            <input type="checkbox" style={{ color: '#005c99' }} />
                            <span>{x.id}</span>
                            <span>{x.title}</span>
                            <span style={{ color: 'red' }}>{x.date}</span>
                            {/* <button className='btn btn-outline-secondary btn-sm border-0'><MdDelete /></button> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ToDoItems
