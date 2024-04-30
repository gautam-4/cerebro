import { useState, useEffect } from 'react'
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.svg'
import tickIcon from '../assets/tick-icon2.svg'

function Todo() {
    const [todoList, setTodoList] = useState([{name: 'todo1', isDone: false}])

    function handleTodoAdd(){
        const todoName = document.getElementById('add-todo-name').value;
        if (todoName.trim()!==""){
            setTodoList(prevTodoList => [...prevTodoList, {name: todoName, isDone: false}])
            document.getElementById('add-todo-name').value = ""
        }
    }

    function handleTodoTick(index) {
        const prevTodoList = [...todoList];
        prevTodoList[index].isDone = !prevTodoList[index].isDone;
        setTodoList(prevTodoList);
    }

    function handleTodoDelete(index) {
        setTodoList(todoList.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="todo">
                <div className="todo_heading title">
                    To-do
                </div>
                <div className="todo_content">{
                    todoList.map((todoItem, index)=>
                        <div className="todo_content-cell" key={index}>
                        <div className="todo_content-cell-inner">
                            <div className="btn-div-left"><button className="flex-center" onClick={() => handleTodoTick(index)}><img src={tickIcon}
                                alt='tick' style={todoItem.isDone?{ display: 'inline' }:{display : 'none'}}/></button></div>
                            <div className="todo-name" style={todoItem.isDone?{textDecoration : 'line-through'}:{textDecoration : 'none'}}>{todoItem.name}</div>
                        </div>
                        <div className="todo_content-cell-delete"><img src={deleteIcon} alt="delete" id='todo-delete-icon' onClick={()=>handleTodoDelete(index)}/></div>
                        </div>
                )}
                </div>

                <div className="todo-add">
                    <input type="text" placeholder="To-do Name" maxLength="20" id="add-todo-name"/>
                    <button onClick={handleTodoAdd}>+</button>
                </div>
            </div>
        </>
    )
}

export default Todo