import React, { useState } from 'react'
import "./Box.css"
import ContainerBox from "./ContainerBox"
const Box = () => {

  const [value , setValue] = useState("")

  const handelValue = (val) => {
    if (val === '=') {
      setValue(eval(value).toString());
    } else if (val === 'c') {
      setValue(''); 
    } else {
      setValue((v) => v + val); // Append the clicked value
    }
  };

  return (
    <center className='box'>
      <div >
        <input value={value} readOnly className='inp' type="text" />
        <ContainerBox handelValue={handelValue} ></ContainerBox>
      </div>
    </center>
  )
}

export default Box
