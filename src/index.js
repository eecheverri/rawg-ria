import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// REDUX SETUP
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
// REACT ROUTER
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// CONNECTING REDUX WITH REACT
import { Provider } from "react-redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// DOM RENDER
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
