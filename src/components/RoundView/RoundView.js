import React from "react";
import "./RoundView.scss";
// import PropTypes from "prop-types";
import { observer } from "mobx-react";
import CardList from "../CardList";

const RoundView = observer(({ round, player1, player2, board }) => {
  return (
    <div className="RoundView">
      <div className="RoundView__holder">
        {board?.colors.map((color) => (
          <CardList
            key={color}
            numbers={round.cardsOf(player1, color).map((card) => card.number)}
            disabledNumbers={round
              .cardsOf(player2, color)
              .map((card) => card.number)}
            color={color}
            onClick={(number) => {
              const card = round.card(number, color);

              card.assigned
                ? round.assignCard(card, null)
                : round.assignCard(card, player1);
            }}
            reversed
          />
        ))}
      </div>

      <div className="RoundView__board">
        <div>
          <div>
            상대방 ({player1.name}): {round.score(player1)}
          </div>
          <hr />
          <div>
            나 ({player2.name}): {round.score(player2)}
          </div>
        </div>
        <div>전체 점수 현황</div>
      </div>

      <div className="RoundView__holder">
        {board?.colors.map((color) => (
          <CardList
            key={color}
            numbers={round.cardsOf(player2, color).map((card) => card.number)}
            disabledNumbers={round
              .cardsOf(player1, color)
              .map((card) => card.number)}
            color={color}
            onClick={(number) => {
              const card = round.card(number, color);

              card.assigned
                ? round.assignCard(card, null)
                : round.assignCard(card, player2);
            }}
          />
        ))}
      </div>
    </div>
  );
});

RoundView.propTypes = {
  // onClick: PropTypes.func,
};

export default RoundView;
