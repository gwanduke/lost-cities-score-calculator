import { observer } from "mobx-react";
import React from "react";
import RoundView from "../RoundView";
import "./GameBoard.scss";
// import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { useHistory } from "react-router";

const GameBoard = observer(({ game }) => {
  const history = useHistory();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {game.isFirstRound ? (
          <Button color="info" onClick={() => history.push("/")}>
            홈으로
          </Button>
        ) : (
          <Button color="info" onClick={() => game.prevRound()}>
            이전 라운드
          </Button>
        )}
        <div>
          <h2>🔥 {game.currentRoundNumber} 라운드 🔥</h2>
          (총 {game.maxRound} 라운드)
        </div>
        {game.isLastRound ? (
          <Button
            color="info"
            onClick={() => history.push(`/games/${game.id}/result`)}
          >
            결과 보기
          </Button>
        ) : (
          <Button color="info" onClick={() => game.nextRound()}>
            다음 라운드
          </Button>
        )}
      </div>
      <div></div>
      {game.currentRound && (
        <RoundView
          round={game.currentRound}
          player1={game.players[0]}
          player2={game.players[1]}
          board={game.board}
        />
      )}
    </div>
  );
});

GameBoard.propTypes = {
  // game: PropTypes.string,
};

export default GameBoard;
