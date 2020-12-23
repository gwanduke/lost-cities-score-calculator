import Board from "./Board";

test("", () => {
  const board = Board.create({
    id: "",
    colors: ["red", "blue", "yellow"],
    isSixthExpedition: false,
  });

  expect(board).toEqual({
    id: "",
    colors: ["red", "blue", "yellow"],
    isSixthExpedition: false,
  });
});
