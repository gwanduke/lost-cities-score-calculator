import { types } from "mobx-state-tree";

const Board = types.model({
  id: types.identifier,
  colors: types.array(
    types.union(
      types.literal("purple"),
      types.literal("yellow"),
      types.literal("white"),
      types.literal("blue"),
      types.literal("green"),
      types.literal("red")
    )
  ),
  isSixthExpedition: true,
});

export default Board;
