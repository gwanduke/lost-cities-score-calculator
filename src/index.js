import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { destroy, onSnapshot } from "mobx-state-tree";

import App from "./components/App";
import RootStore from "./models/RootStore";

const localStorageKey = "__lostCitiesInfo_store__";
const initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {
      games: [],
      boards: [
        {
          id: "yellowWhite",
          colors: ["yellow", "white", "blue", "green", "red"],
          isSixthExpedition: false,
        },
        {
          id: "yellowWhite-reversed",
          colors: ["yellow", "white", "blue", "green", "red"].reverse(),
          isSixthExpedition: false,
        },
        {
          id: "purpleYellow",
          colors: ["yellow", "blue", "white", "green", "red"],
          isSixthExpedition: false,
        },
        {
          id: "purpleYellow-reversed",
          colors: ["yellow", "blue", "white", "green", "red"].reverse(),
          isSixthExpedition: false,
        },
        {
          id: "yellowWhite-6th",
          colors: ["yellow", "white", "blue", "green", "red", "purple"],
          isSixthExpedition: true,
        },
        {
          id: "yellowWhite-reversed-6th",
          colors: [
            "yellow",
            "white",
            "blue",
            "green",
            "red",
            "purple",
          ].reverse(),
          isSixthExpedition: true,
        },
        {
          id: "purpleYellow-6th",
          colors: ["purple", "yellow", "blue", "white", "green", "red"],
          isSixthExpedition: true,
        },
        {
          id: "purpleYellow-reversed-6th",
          colors: [
            "purple",
            "yellow",
            "blue",
            "white",
            "green",
            "red",
          ].reverse(),
          isSixthExpedition: true,
        },
      ],
    };

let store;
let snapshotListenerDestroyer;

function createTodoStore(snapshot) {
  if (snapshotListenerDestroyer) snapshotListenerDestroyer();
  if (store) destroy(store);

  window.store = store = RootStore.create(snapshot);

  snapshotListenerDestroyer = onSnapshot(store, (snapshot) => {
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot));
  });

  return store;
}

function renderApp(App, store) {
  return ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App store={store} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderApp(App, createTodoStore(initialState));
