import "./Game.css";
import React from "react";
import GameBoard from "./GuideBoard";
import CardStack from "./CardList";
import Layout from "./common/HorizontalSpacer";
import calcLine from "../utils/calcLine";

const calcScore = (finalStatus) => {
  return Object.keys(finalStatus).reduce(
    (acc, color) => acc + calcLine(finalStatus[color]),
    0
  );
};

const Game = ({ game, onClickCard, onClickPrev, onClickNext }) => {
  if (!game) return;

  const clickCard = (player, color) => {
    return (num) => onClickCard(player, color, num);
  };

  const round = game.rounds.filter(
    (_, index) => game.currentRound === index + 1
  )[0];

  return (
    <div className="Game">
      <div>
        <div>
          <div>약속한 라운드: {game.maxRound}</div>
          <div>현 라운드: {game.currentRound}</div>
          <div>총 라운드 진행: {game.lastRound}</div>
        </div>
        {game.currentRound !== 1 && (
          <button onClick={onClickPrev}>Prev Round</button>
        )}
        {game.maxRound !== game.currentRound && (
          <button onClick={onClickNext}>Next Round</button>
        )}
        {game.maxRound === game.currentRound && <a href="/">Finish</a>}
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                {game.rounds.map((_, index) => (
                  <th>R{index + 1}</th>
                ))}
                <th>합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game.player1.name}</td>
                {game.rounds.map((round) => (
                  <td>{calcScore(round.player1)}</td>
                ))}
                <td>
                  {game.rounds.reduce(
                    (acc, round) => acc + calcScore(round.player1),
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>{game.player2.name}</td>
                {game.rounds.map((round) => (
                  <td>{calcScore(round.player2)}</td>
                ))}
                <td>
                  {game.rounds.reduce(
                    (acc, round) => acc + calcScore(round.player2),
                    0
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Layout>
        <CardStack
          reverse={true}
          selected={round.player1.purple}
          enabled={round.deck.purple}
          color="purple"
          onClickCard={clickCard("player1", "purple")}
        />
        <CardStack
          reverse={true}
          selected={round.player1.yellow}
          enabled={round.deck.yellow}
          color="yellow"
          onClickCard={clickCard("player1", "yellow")}
        />
        <CardStack
          reverse={true}
          selected={round.player1.blue}
          enabled={round.deck.blue}
          color="blue"
          onClickCard={clickCard("player1", "blue")}
        />
        <CardStack
          reverse={true}
          selected={round.player1.white}
          enabled={round.deck.white}
          color="white"
          onClickCard={clickCard("player1", "white")}
        />
        <CardStack
          reverse={true}
          selected={round.player1.green}
          enabled={round.deck.green}
          color="green"
          onClickCard={clickCard("player1", "green")}
        />
        <CardStack
          reverse={true}
          selected={round.player1.red}
          enabled={round.deck.red}
          color="red"
          onClickCard={clickCard("player1", "red")}
        />
      </Layout>
      <div>
        Player 1. {game.player1.name}(상대): ({calcScore(round.player1)})
      </div>
      <GameBoard colors={game.colorOrder} />
      <div>
        Player 2. {game.player2.name}(나): ({calcScore(round.player2)})
      </div>
      <Layout>
        <CardStack
          selected={round.player2.purple}
          enabled={round.deck.purple}
          color="purple"
          onClickCard={clickCard("player2", "purple")}
        />
        <CardStack
          selected={round.player2.yellow}
          enabled={round.deck.yellow}
          color="yellow"
          onClickCard={clickCard("player2", "yellow")}
        />
        <CardStack
          selected={round.player2.blue}
          enabled={round.deck.blue}
          color="blue"
          onClickCard={clickCard("player2", "blue")}
        />
        <CardStack
          selected={round.player2.white}
          enabled={round.deck.white}
          color="white"
          onClickCard={clickCard("player2", "white")}
        />
        <CardStack
          selected={round.player2.green}
          enabled={round.deck.green}
          color="green"
          onClickCard={clickCard("player2", "green")}
        />
        <CardStack
          selected={round.player2.red}
          enabled={round.deck.red}
          color="red"
          onClickCard={clickCard("player2", "red")}
        />
      </Layout>
    </div>
  );
};

export default Game;
