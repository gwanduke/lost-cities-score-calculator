import "./Result.scss";

import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Button, Table } from "reactstrap";

const Result = ({ store }) => {
  const match = useRouteMatch<{ id: string }>();
  const game = store.findGame(match.params.id);
  const player1 = game.players[0];
  const player2 = game.players[1];
  const player1TotScore = game.score(player1);
  const player2TotScore = game.score(player2);
  const history = useHistory();

  return (
    <div className="Result">
      <h2>
        {player1.name} vs {player2.name}
      </h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>{player1.name}</th>
            <th>{player2.name}</th>
          </tr>
        </thead>
        <tbody>
          {game.rounds.map((round, index) => {
            const player1Score = round.score(player1);
            const player2Score = round.score(player2);

            let winner = null;
            if (player1Score > player2Score) {
              winner = player1;
            } else if (player1Score < player2Score) {
              winner = player2;
            } else {
              winner = null;
            }

            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  {player1Score} {winner === player1 ? "🏆" : ""}
                </td>
                <td>
                  {player2Score} {winner === player2 ? "🏆" : ""}
                </td>
              </tr>
            );
          })}
          <tr>
            <th>결과</th>
            <td>
              {player1TotScore} {game.winner === player1 ? "🏆" : ""}
            </td>
            <td>
              {player2TotScore} {game.winner === player2 ? "🏆" : ""}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={() => {
          history.push(`/games/${game.id}`);
        }}
      >
        점수 수정
      </Button>{" "}
      <Button
        color="primary"
        onClick={() => {
          history.push("/");
        }}
      >
        홈 화면으로 이동
      </Button>
    </div>
  );
};

export default Result;
