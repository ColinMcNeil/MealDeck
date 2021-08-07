import React, { forwardRef } from "react";
import "./Card.css";

export default forwardRef(({ meal, first, remove }, ref) => (
  <div ref={ref}>
    <div className={["card", first ? "first" : ""].join(" ")}>
      <div className="cardTop">
        <span>{meal.name}</span>
        <button onClick={() => remove(meal.id)}>X</button>
      </div>
    </div>
  </div>
));
