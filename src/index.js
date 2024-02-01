import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from "./App";
import { GameContextProvider } from "./context/gameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <App/>
  </GameContextProvider>
);