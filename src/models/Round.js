import { getParent, types } from "mobx-state-tree";
import Card from "./Card";
import { calculateColor } from "../utils/calculator";

const Round = types
  .model({
    cards: types.array(Card),
    finished: false,
  })
  .views((self) => ({
    get game() {
      return getParent(self, 2);
    },
    get board() {
      return self.game.board;
    },
    card(number, color) {
      return self.cards.filter(
        (card) => card.number === number && card.color === color
      )[0];
    },
    cardsOf(player, color) {
      return self.cards.filter(
        (card) => card.player === player && card.color === color
      );
    },
    score(player, color) {
      if (!color) {
        return self.board.colors.reduce(
          (acc, cur) => acc + self.score(player, cur),
          0
        );
      }
      const cards = self.cardsOf(player, color);
      const numberCards = cards.filter((card) => !card.isNego);
      const negoCards = cards.filter((card) => card.isNego);
      return calculateColor(
        numberCards.map((card) => card.number),
        negoCards.length
      );
    },
    findCard(color, number, isNego = false) {
      return self.cards.find(
        (card) =>
          card.color === color &&
          card.number === number &&
          card.isNego === isNego
      );
    },
  }))
  .actions((self) => ({
    afterCreate() {
      if (self.cards.length === 0) {
        // Init cards.
        const cards = [];
        ["purple", "yellow", "blue", "white", "green", "red"].forEach(
          (color) => {
            // Init number cards.
            [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((number) => {
              cards.push(
                Card.create({
                  id: `${color}-${number}`,
                  player: null,
                  color,
                  isNego: false,
                  number,
                })
              );
            });
            // Init negoiation cards.
            [-1, -2, -3].forEach((number) => {
              cards.push(
                Card.create({
                  id: `N-${color}-${number}`,
                  player: null,
                  color,
                  isNego: true,
                  number,
                })
              );
            });
          }
        );
        self.cards = cards;
      }
    },
    assignCard(card, player) {
      card.assignPlayer(player);
    },
    unassignCard(card) {
      card.assignPlayer(null);
    },
  }));

export default Round;
