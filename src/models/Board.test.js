import Board from "./Board";

test("", () => {
  const board = Board.create({
    colors: ["red", "blue", "yellow"],
    isSixthExpedition: false,
  });

  expect(board).toEqual({
    colors: ["red", "blue", "yellow"],
    isSixthExpedition: false,
  });
});
