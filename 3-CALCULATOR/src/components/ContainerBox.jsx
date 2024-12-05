import React from "react";
import "./ContainerBox.css";

const ContainerBox = ( {handelValue} ) => {
  let val = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=", "9", "0","."];

  const handelOnClick = (item) => {
    handelValue(item.target.textContent)
  }



  return (
    <div>
      <div className="container">
        {val.map((item, index) => (
          <div key={index}   className="containerBox"><button onClick={(item) => handelOnClick(item)} >{item}</button></div>
        ))}
      </div>
    </div>
  );
};

export default ContainerBox;
