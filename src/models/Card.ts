import Player from "./Player";
import { types } from "mobx-state-tree";

const Card = types
  .model({
    id: types.optional(types.string, ""),
    player: types.maybeNull(types.reference(Player)),
    number: types.maybeNull(types.integer),
    color: types.union(
      types.literal("purple"),
      types.literal("yellow"),
      types.literal("white"),
      types.literal("blue"),
      types.literal("green"),
      types.literal("red")
    ),
    isNego: types.boolean,
  })
  .views((self) => ({
    get assigned() {
      return self.player !== null;
    },
  }))
  .actions((self) => ({
    assignPlayer(player) {
      self.player = player && player.id;
    },
  }));

export default Card;
