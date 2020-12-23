import { types } from "mobx-state-tree";

const Player = types
  .model({
    id: types.identifier,
    name: types.string,
  })
  .actions((self) => ({
    changeName(name) {
      self.name = name;
    },
  }));

export default Player;
