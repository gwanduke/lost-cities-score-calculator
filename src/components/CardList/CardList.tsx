import React from "react";
import CardButton from "../CardButton";
import "./CardList.scss";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

type Props = {
  numbers: number[];
  disabledNumbers: number[];
  color: string;
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

CardList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.oneOf(["purple", "red", "green", "blue", "white", "yellow"]),
  onClick: PropTypes.func,
};

export default CardList;
