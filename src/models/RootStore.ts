import Board from "./Board";
import Game from "./Game";
import { destroy, types } from "mobx-state-tree";

const RootStore = types
  .model({
    playingGame: types.maybeNull(types.reference(Game)),
    games: types.array(Game),
    boards: types.array(Board),
  })
  .views((self) => ({
    get lastGame() {
      return self.games.length === 0 ? null : self.games[self.games.length - 1];
    },
    findGame(id) {
      return self.games.find((game) => game.id === id);
    },
  }))
  .actions((self) => ({
    addGame(game) {
      self.games.push(game);
      self.playingGame = game.id;
    },
    removeGame(game) {
      self.playingGame = null;
      destroy(game);
    },
  }));

export default RootStore;
