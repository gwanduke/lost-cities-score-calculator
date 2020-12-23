import "./CardList.scss";

import React from "react";
import CardButton from "../CardButton";
import cn from "../../utils/cn";
import { Color } from "types";

type Props = {
  numbers: number[];
  disabledNumbers: number[];
  color: Color;
  onClick: (number: number) => void;
  reversed?: boolean;
};

const CardList = ({
  numbers,
  disabledNumbers,
  color,
  onClick,
  reversed,
}: Props) => {
  // TODO: optimize
  let allCardNumbers = [-1, -2, -3, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  reversed && allCardNumbers.reverse();

  return (
    <div className={cn("CardList", `CardList--${color}`)}>
      {allCardNumbers.map((number) => (
        <div key={number} className="CardList__item">
          <CardButton
            number={number}
            color={color}
            selected={numbers.includes(number)}
            disabled={disabledNumbers.includes(number)}
            onClick={() => onClick(number)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
