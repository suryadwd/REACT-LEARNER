import React, { useState } from "react";
import style from "./Input.module.css";
const Input = ({ handelOnenter }) => {
  return (
    <div className={style.inp}>
      <input
        onKeyDown={(e) => handelOnenter(e)}
        type="text"
        className={style.in}
      />
    </div>
  );
};

export default Input;
