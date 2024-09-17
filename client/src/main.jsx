import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StoreProvider } from "easy-peasy";

import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import theme from "./theme.js";
import ErrorBoundary from "./components/Common/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
