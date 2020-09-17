import React from "react";
import GameBoard from "./GameBoard";
import Modal from "./common/Modal";

const NewGameDialog = ({ onStartGame }) => {
  return (
    <Modal title="새 게임 시작하기">
      <label htmlFor="">
        <input type="checkbox" name="" id="" />
        6번째 탐험 확장
      </label>
      <div>
        <div>
          <input name="player1" type="text" placeholder="Player 1" />
        </div>
        <GameBoard />
        <div>
          <input name="player2" type="text" placeholder="Player 2" />
        </div>
      </div>
      <div>
        <button onClick={onStartGame}>시작</button>
      </div>
    </Modal>
  );
};

export default NewGameDialog;
