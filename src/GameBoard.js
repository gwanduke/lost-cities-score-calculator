import React from "react";
import Layout from "./common/Layout";

const GameBoard = ({ reverse }) => {
  const cardSlots = [
    <div className="card-slot purple"></div>,
    <div className="card-slot yellow"></div>,
    <div className="card-slot blue"></div>,
    <div className="card-slot white"></div>,
    <div className="card-slot green"></div>,
    <div className="card-slot red"></div>,
  ];

  return (
    <div className="GameBoard">
      <Layout>{reverse ? cardSlots.reverse() : cardSlots}</Layout>
    </div>
  );
};

export default GameBoard;
