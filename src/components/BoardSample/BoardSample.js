import React from "react";
import "./BoardSample.scss";
import PropTypes from "prop-types";

const BoardSample = ({ colors, onClick }) => {
  return (
    <div className="BoardSample" onClick={onClick}>
      {colors.map((color) => (
        <div
          key={color}
          className={`BoardSample__slot BoardSample__slot--${color}`}
        ></div>
      ))}
    </div>
  );
};

BoardSample.propTypes = {
  colors: PropTypes.array,
  onClick: PropTypes.func,
};

export default BoardSample;
