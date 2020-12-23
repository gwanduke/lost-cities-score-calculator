import { observer } from "mobx-react";
import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Home";
import NewForm from "./NewForm";
import GameBoard from "./GameBoard";
import Result from "./Result";

const App = ({ store }) => {
  return (
    <div>
      <div
        style={{
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Switch>
          <Route path="/new">
            <NewForm store={store} />
          </Route>
          <Route path="/games/:id/result">
            <Result store={store} />
          </Route>
          <Route path="/games/:id">
            {store.playingGame ? <GameBoard game={store.playingGame} /> : null}
          </Route>
          <Route path="/">
            <Home store={store} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default observer(App);
