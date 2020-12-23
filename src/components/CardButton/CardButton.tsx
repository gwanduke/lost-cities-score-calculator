import "./CardButton.scss";

import React from "react";

import cn from "../../utils/cn";
import { Color } from "types";

type Props = {
  number: number;
  color: Color;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
};

const CardButton = ({ number, color, selected, disabled, onClick }: Props) => {
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

export default CardButton;
