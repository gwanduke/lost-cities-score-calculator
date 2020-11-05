import React from "react";
import { Table, Button } from "reactstrap";

const History = ({ games, onDelete, onModify }) => {
  return (
    <Table>
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
              <Button onClick={() => onModify(game.id)}>다시보기</Button>
            </td>
            <td>
              <Button
                color="danger"
                onClick={() =>
                  global.confirm("정말 삭제하시겠습니까?") && onDelete(game.id)
                }
              >
                삭제
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default History;
