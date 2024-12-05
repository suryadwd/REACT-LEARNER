import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Item.module.css";
const Item = ({ all, handelOnDel }) => {
  let [theme, settheme] = useState("light");

  const handelOnAdd = (toogle) => {
    settheme(toogle === "light" ? "dark" : "light");
    theme === "light" ? alert("DONE") : alert("UNDone");
  };

  return (
    <>
      {all.map((item, index) => {
        return (
          <div key={index} className={styles.con}>
            <div>{item}</div>
            <button
              onClick={() => handelOnAdd(theme)}
              type="button"
              className=" bt1 btn btn-success "
            >
              Add
            </button>

            <button
              key={index}
              onClick={() => handelOnDel(index)}
              type="button"
              className=" bt2 btn btn-danger"
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Item;
