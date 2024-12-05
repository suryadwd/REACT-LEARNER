import React from 'react'
import "./Body.css"
import { useState } from 'react'
import { useEffect } from 'react'
const Body = () => {
  let date = new Date()
  const[currTime, setcurrTime] = useState(date)
  const[currDate, setcurrDate] = useState(date)
  useEffect( () => {

    const neww = setInterval(() => {
      setcurrTime(new Date())
    }, 1000);

  },[])
  return (
    <center>
      <p>This clock shows the time of bharat</p>
      {currDate.toDateString()}   <br />
      {currTime.toLocaleTimeString()}
    </center>
  )
}

export default Body
