import React, { useRef } from "react";
import "./NewForm.scss";
// import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { Link, useHistory } from "react-router-dom";

import BoardSample from "../BoardSample";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Game from "../../models/Game";
import { v4 as uuidV4 } from "uuid";

const NewForm = observer(({ store }) => {
  const gameRef = useRef(
    Game.create({
      id: uuidV4(),
      players: [
        {
          id: uuidV4(),
          name: store.lastGame?.players[0].name || "",
        },
        {
          id: uuidV4(),
          name: store.lastGame?.players[1].name || "",
        },
      ],
      rounds: [],
      maxRound: store.lastGame?.maxRound || 3,
      boardId: store.lastGame?.boardId || null,
    })
  );
  const game = gameRef.current;

  const handleChangeName = (e) => {
    game.players[Number(e.target.name)].changeName(e.target.value);
  };

  const history = useHistory();

  return (
    <div>
      <h1>새 게임</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">이름 (상대방)</Label>
          <Input
            variant="filled"
            name="0"
            type="text"
            value={game.players[0].name}
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">이름 (나)</Label>
          <Input
            variant="filled"
            name="1"
            type="text"
            value={game.players[1].name}
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">최대 라운드 수</Label>
          <Input
            variant="filled"
            label="Max Round"
            name="1"
            type="number"
            value={game.maxRound}
            onChange={(e) => game.changeMaxRound(Number(e.target.value))}
          />
        </FormGroup>
      </Form>
      <FormGroup tag="fieldset">
        <legend>보드 템플릿 선택</legend>
        <p>
          로스트시티는 국내/해외 버전마다, 그리고 확장팩 여부에 따라 색상 순서가
          다릅니다. 점수 계산자 기준으로 현재 보이는 보드 모양을 선택하세요.
        </p>
        {store.boards.map((board) => (
          <FormGroup key={board.id} check>
            <Label
              check
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2px",
                cursor: "pointer",
              }}
            >
              <Input
                type="radio"
                name="boardId"
                checked={game.boardId === board.id}
                onChange={() => {
                  game.setBoard(board);
                }}
              />
              <BoardSample colors={board.colors} />
            </Label>
          </FormGroup>
        ))}
      </FormGroup>
      <Link to="/">
        <Button size="lg" color="secondary">
          취소
        </Button>
      </Link>{" "}
      <Button
        size="lg"
        color="primary"
        onClick={() => {
          store.addGame(game);
          history.push(`/games/${game.id}`);
        }}
      >
        위 설정으로 게임 시작
      </Button>
    </div>
  );
});

NewForm.propTypes = {
  // game: PropTypes.func,
  // store: PropTypes.func,
};

export default NewForm;
