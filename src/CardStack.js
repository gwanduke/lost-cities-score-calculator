import React from "react";

const CardStack = ({ reverse }) => {
  const cards = [
    <div className="card">-</div>,
    <div className="card">2</div>,
    <div className="card">3</div>,
    <div className="card">4</div>,
    <div className="card">5</div>,
    <div className="card">6</div>,
    <div className="card">7</div>,
    <div className="card">8</div>,
    <div className="card">9</div>,
    <div className="card">10</div>,
  ];

  return <div className="CardStack">{reverse ? cards.reverse() : cards}</div>;
};

export default CardStack;
