import Player from "./Player";
import { getRoot, types } from "mobx-state-tree";
import Round from "./Round";

const Game = types
  .model({
    id: types.identifier, // TODO:
    players: types.array(Player),
    rounds: types.array(Round),
    boardId: types.maybeNull(types.string),
    maxRound: types.number,
    currentRoundIndex: 0,
    createdTimestamp: types.maybeNull(types.number),
  })
  .views((self) => ({
    get player1() {
      return self.players[0];
    },
    get player2() {
      return self.players[1];
    },
    get board() {
      return getRoot(self).boards.find((b) => b.id === self.boardId);
    },
    get currentRound() {
      return self.rounds[self.currentRoundIndex];
    },
    get currentRoundNumber() {
      return self.currentRoundIndex + 1;
    },
    get isFirstRound() {
      return self.currentRoundNumber === 1;
    },
    get isLastRound() {
      return self.currentRoundNumber === self.maxRound;
    },
    get winner() {
      let winner = null;
      const p1Score = self.score(self.player1);
      const p2Score = self.score(self.player2);
      if (p1Score > p2Score) {
        winner = self.player1;
      } else if (p1Score < p2Score) {
        winner = self.player2;
      } else {
        winner = null;
      }
      return winner;
    },
    score(player) {
      return self.rounds.reduce((acc, round) => round.score(player) + acc, 0);
    },
  }))
  .actions((self) => ({
    setBoard(board) {
      self.boardId = board.id;
    },
    afterCreate() {
      if (self.rounds.length === 0) {
        self.addNewRound();
      }
      if (!self.createdTimestamp) {
        self.createdTimestamp = Date.now();
      }
    },
    addNewRound() {
      self.rounds.push(
        Round.create({
          cards: [],
          finished: false,
        })
      );
    },
    addRound: (round) => {
      self.rounds.push(round);
    },
    changeMaxRound: (maxRound) => {
      self.maxRound = maxRound;
    },
    prevRound() {
      if (self.currentRoundNumber === 1) {
        // Nothing
      } else {
        self.currentRoundIndex -= 1;
      }
    },
    nextRound() {
      if (self.currentRoundNumber === self.maxRound) {
        self.finished = true;
      } else {
        self.currentRoundIndex += 1;
        if (!self.rounds[self.currentRoundIndex]) {
          self.addNewRound();
        }
      }
    },
  }));

export default Game;
