import "./Home.scss";

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Table, Button, Jumbotron, Badge } from "reactstrap";
import { format } from "date-fns";
import { observer } from "mobx-react";

const Home = observer(({ store }) => {
  const history = useHistory();

  return (
    <div>
      <Jumbotron>
        <h1>로스트시티 점수 계산기</h1>
        <p>2인용 보드게임, 로스트시티 점수 계산기</p>
        <p>개선사항/피드백: gwanduke@gmail.com</p>
      </Jumbotron>
      <Link to="/new">
        <Button color="primary">새 게임 시작하기</Button>
      </Link>

      <br />
      <br />
      <h2>게임 기록</h2>
      <Table>
        <thead>
          <tr>
            <th>Who</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {store.games.map((game, index) => (
            <tr key={game.id}>
              <td>
                {game.players.map((player) => player.name).join(" vs ")}{" "}
                {index === store.games.length - 1 && (
                  <Badge color="secondary">Hot!</Badge>
                )}
              </td>
              <td>
                {format(new Date(game.createdTimestamp), "yyyy/MM/dd")}
                <br />
                {format(new Date(game.createdTimestamp), "HH:mm:ss")}
              </td>
              <td>
                <Button
                  color="info"
                  onClick={() => history.push(`/games/${game.id}`)}
                >
                  계속
                </Button>{" "}
                <Button
                  color="danger"
                  onClick={() =>
                    global.confirm("정말 삭제하시겠습니까?") &&
                    store.removeGame(game)
                  }
                >
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
});

export default Home;
