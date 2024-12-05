import React, { useState } from 'react'
import './Input.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Show from './Show'
const Input = () => {

  const[Task, setTask] = useState("")
  const[Time, setTime] = useState("")
  const[Todo, setTodo] = useState([])


  const handelTask = (e) => {
    setTask(e.target.value)
  }

  const handelTime = (e) => {
    setTime(e.target.value)
  }

  const handelAddbutton = () => {
    setTodo((prev) => [...prev,{Task,Time}])
    setTask("")
    setTime("")
  }

  const handelOnDel = (index) => {
    let newTodo = Todo.filter( (item,i) => i != index )
    setTodo(newTodo)
  }


  return (
    <>
    <center  className='i'>
      <input className='inp' value={Task}  onChange={(e) => handelTask(e)}   type="text" placeholder='Enter Todo' />
      <input className='inp' value={Time}  onChange={(e) => handelTime(e)} type="date" />
      <button  onClick={handelAddbutton} type="button" className=" btn btn-primary">Add</button>

    </center>
    <Show Todo={Todo} handelOnDel={handelOnDel} ></Show>
    </>
  )
}

export default Input
