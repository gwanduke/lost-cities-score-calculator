import "./CardItem.css";
import React from "react";

const CardItem = ({ disabled, selected, number, color, onClick }) => {
  return (
    <div
      className={`CardItem ${selected ? "selected" : ""} ${
        disabled ? "disabled" : ""
      } ${color}`}
      onClick={disabled ? () => {} : onClick}
    >
      {selected ? "✅ " : ""}
      {disabled ? "❌ " : ""}
      {number > 10 ? "💰" : number}
    </div>
  );
};

export default CardItem;
