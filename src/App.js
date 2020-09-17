import React, { useState } from "react";
import NewGameDialog from "./NewGameDialog";
import Game from "./Game";

function App() {
  const [opened, setOpened] = useState(false);
  const [gameStated, setGameStarted] = useState(true);

  return gameStated ? (
    <div>
      <Game />
    </div>
  ) : (
    <div className="App">
      <h1>로스트시티 점수계산기</h1>
      <div>
        <button onClick={() => setOpened(true)}>+ 새 게임</button>
      </div>
      <div>2020. 09. 10. A vs B</div>
      {opened && <NewGameDialog onStartGame={() => setGameStarted(true)} />}
    </div>
  );
}

export default App;
