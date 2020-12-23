import "./BoardSample.scss";

import React from "react";
import { Color } from "types";

type Props = {
  colors: Color[];
};

const BoardSample = ({ colors }: Props) => {
  return (
    <div className="BoardSample">
      {colors.map((color) => (
        <div
          key={color}
          className={`BoardSample__slot BoardSample__slot--${color}`}
        ></div>
      ))}
    </div>
  );
};

export default BoardSample;
