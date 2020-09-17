import React from "react";
import GameBoard from "./GameBoard";
import CardStack from "./CardStack";
import Layout from "./common/Layout";

const Game = () => {
  return (
    <div>
      <Layout>
        <CardStack reverse={true} />
        <CardStack reverse={true} />
        <CardStack reverse={true} />
        <CardStack reverse={true} />
        <CardStack reverse={true} />
        <CardStack reverse={true} />
      </Layout>
      <GameBoard />
      <Layout>
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
      </Layout>
    </div>
  );
};

export default Game;
