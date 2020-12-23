import { observer } from "mobx-react";
import React from "react";
import RoundView from "../RoundView";
import "./GameBoard.scss";
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
          <h2>
            <span role="img" aria-label="">
              🔥
            </span>{" "}
            {game.currentRoundNumber} 라운드{" "}
            <span role="img" aria-label="">
              🔥
            </span>
          </h2>
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

export default GameBoard;
