import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from './redux/reducers/configureStore'
import './sass/_global.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
