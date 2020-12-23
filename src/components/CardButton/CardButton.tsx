import React from "react";
import "./CardButton.scss";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const CardButton = ({ number, color, selected, disabled, onClick }) => {
  return (
    <div
      className={cn(
        "CardButton",
        selected ? "CardButton--selected" : "CardButton--notSelected",
        disabled && "CardButton--disabled",
        `CardButton--${color}`
      )}
      onClick={onClick}
    >
      {number < 0 ? "💰" : number}
    </div>
  );
};

CardButton.propTypes = {
  number: PropTypes.number,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CardButton;
