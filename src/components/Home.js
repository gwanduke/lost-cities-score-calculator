import React from "react";
import NewGameDialog from "./NewGameDialog";
import History from "./History";

const Home = ({ games, onStartGame, onDelete, onModify }) => {
  const [opened, setOpened] = React.useState(true);

  return (
    <div className="Home">
      <h1>로스트시티 점수계산기</h1>
      <hr />
      <div>
        <button onClick={() => setOpened(true)}>+ 새 게임</button>
      </div>
      <hr />
      <History games={games} onDelete={onDelete} onModify={onModify} />
      {opened && <NewGameDialog onStartGame={onStartGame} />}
    </div>
  );
};

export default Home;
