import "./CardList.css";
import React from "react";
import Card from "./CardItem";
import calcLine from "../utils/calcLine";

const CardList = ({ reverse, selected, enabled, color, onClickCard }) => {
  const numbers = [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cards = [
    <div>{calcLine(selected)}</div>,
    ...numbers.map((num) => (
      <Card
        selected={selected.includes(num)}
        disabled={!selected.includes(num) && !enabled.includes(num)}
        number={num}
        onClick={() => onClickCard(num)}
        color={color}
      />
    )),
  ];

  return <div className="CardList">{reverse ? cards.reverse() : cards}</div>;
};

export default CardList;
