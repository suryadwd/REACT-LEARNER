import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Show.css";
const Show = ({ Todo, handelOnDel }) => {
  return (
    <>
      {Todo.map((item, index) => {
        return(
        <div className="one" key={index}>
          <div>{item.Task}</div>
          <div>{item.Time}</div>
          <div>
            <button onClick= {() => handelOnDel(index)} type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      )})}
    </>
  );
};

export default Show;
