import "./GuideBoard.css";
import React from "react";
import Layout from "./common/HorizontalSpacer";

const GuideBoard = ({ reverse, top, bottom, colors, onClick }) => {
  const cardSlots = colors.map((color) => (
    <div className={`card-slot ${color}`} />
  ));

  return (
    <div
      className="GuideBoard"
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : undefined,
      }}
    >
      {top}
      <div className="GuideBoard__placeholder">
        <Layout>{reverse ? cardSlots.reverse() : cardSlots}</Layout>
      </div>
      {bottom}
    </div>
  );
};

export default GuideBoard;
