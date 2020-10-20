import React, { useState } from "react";
import Game from "./components/Game";
import Home from "./components/Home";
import { useEffect } from "react";
import { localStorageKeys } from "./constants";

const newRound = {
  player1: {
    purple: [],
    yellow: [],
    blue: [],
    white: [],
    green: [],
    red: [],
  },
  player2: {
    purple: [],
    yellow: [],
    blue: [],
    white: [],
    green: [],
    red: [],
  },
  deck: {
    purple: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    yellow: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    blue: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    white: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    green: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    red: [11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

function App() {
  const [playingGameId, setPlayingGameId] = useState(null);
  const [games, setGames] = useState(
    JSON.parse(localStorage.getItem(localStorageKeys.GAMES) || "[]")
  );

  const handleStartGame = ({
    player1Name,
    player2Name,
    maxRound,
    sixthExpedition,
    colorOrder,
  }) => {
    const id = String(Date.now());
    setGames((prevGames) => {
      // TOOD: 가장 최근 게임 설정 불러오기
      const newGame = {
        id,
        version: 1,
        player1: {
          name: player1Name || "Player 1",
        },
        player2: {
          name: player2Name || "Player 2",
        },
        rounds: [newRound],
        maxRound,
        currentRound: 1,
        lastRound: 1,
        sixthExpedition,
        colorOrder,
        playerOrder: ["player1", "player2"],
        createdTimestamp: Date.now(),
      };

      return [...prevGames, newGame];
    });
    setPlayingGameId(id);
  };

  const playingGame = games.filter((game) => game.id === playingGameId)[0];

  useEffect(() => {
    localStorage.setItem(localStorageKeys.GAMES, JSON.stringify(games || []));
  }, [games]);

  const handleClickCard = (player, color, num) => {
    const manipulateColor = (col, number) => {
      return col.includes(number)
        ? col.filter((selectedNum) => selectedNum !== number)
        : [...col, number];
    };

    setGames((prevGames) => {
      const prevRound = playingGame.rounds[playingGame.currentRound - 1];

      const currentRound = {
        ...prevRound,
        [player]: {
          ...prevRound[player],
          [color]: manipulateColor(prevRound[player][color], num),
        },
        deck: {
          ...prevRound.deck,
          [color]: manipulateColor(prevRound.deck[color], num),
        },
      };

      return [
        ...prevGames.map((game) => {
          if (game.id === playingGameId) {
            return {
              ...game,
              rounds: [
                ...game.rounds.map((round, index) => {
                  return index + 1 === game.currentRound ? currentRound : round;
                }),
              ],
            };
          } else {
            return game;
          }
        }),
      ];
    });
  };

  const handleClickNext = () => {
    setGames((prevGames) => {
      return [
        ...prevGames.map((game) => {
          if (game.id === playingGameId) {
            return {
              ...game,
              rounds:
                game.currentRound === game.lastRound
                  ? [...game.rounds, newRound]
                  : game.rounds,
              currentRound: game.currentRound + 1,
              lastRound:
                game.currentRound === game.lastRound
                  ? game.lastRound + 1
                  : game.lastRound,
            };
          } else {
            return game;
          }
        }),
      ];
    });
  };

  const handleClickPrev = () => {
    setGames((prevGames) => {
      return [
        ...prevGames.map((game) => {
          if (game.id === playingGameId) {
            return {
              ...game,
              currentRound: game.currentRound - 1,
            };
          } else {
            return game;
          }
        }),
      ];
    });
  };

  const handleDelete = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  const handleModify = (id) => {
    setPlayingGameId(id);
  };

  return playingGameId ? (
    <div>
      <Game
        game={playingGame}
        onClickCard={handleClickCard}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
      />
    </div>
  ) : (
    <div className="App">
      <Home
        games={games}
        onStartGame={handleStartGame}
        onDelete={handleDelete}
        onModify={handleModify}
      />
    </div>
  );
}

export default App;
