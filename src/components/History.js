import React from "react";

const History = ({ games, onDelete, onModify }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>P1</th>
          <th></th>
          <th>P2</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr>
            <td>{new Date(game.createdTimestamp).toISOString()}</td>
            <td>{game.player1.name}</td>
            <td>vs</td>
            <td>{game.player2.name}</td>
            <td>
              <button onClick={() => onModify(game.id)}>다시보기</button>
            </td>
            <td>
              <span
                role="img"
                aria-label="delete"
                onClick={() => onDelete(game.id)}
              >
                ❌
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default History;
