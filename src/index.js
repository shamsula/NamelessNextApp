import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

import { theme } from "./Style/theme";
import { GlobalStyle } from "./Style/GlobalStyle";
import { Provider } from "react-redux";
import { reducer } from "./store/store";
import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
