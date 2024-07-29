import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import './i18.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense > 
        <App />

        </Suspense>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  </BrowserRouter>
);
// fallback={<div>{...loading}</div>}