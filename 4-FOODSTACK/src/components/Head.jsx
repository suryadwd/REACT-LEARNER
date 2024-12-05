import React, { useState } from "react";
import style from "./Head.module.css";
import Item from "./Item";
import Input from "./Input";
const Head = () => {
  let [all, setall] = useState([]);

  const handelOnenter = (e) => {
    if (e.key === "Enter") {
      setall((prevAll) => [...prevAll, e.target.value]);
    }
  };

  const handelOnDel = (indexToDel) => {
    setall((p) => p.filter((value, index) => index != indexToDel));
  };

  const handelOnAdd = (toogle) => {
    settheme(toogle === "light" ? "dark" : "light");
    console.log(toogle);
  };

  return (
    <div className={style.container}>
      <h1>Healthy Food</h1>
      <Input handelOnenter={handelOnenter}></Input>
      <Item
        handelOnDel={handelOnDel}
        handelOnAdd={handelOnAdd}
        all={all}
      ></Item>
    </div>
  );
};

export default Head;
