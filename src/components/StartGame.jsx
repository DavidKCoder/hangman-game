import React, { useContext } from "react";
import Alphabet from "./Alphabet";
import HangmanAnimation from "./HangmanAnimation";
import GameContext from "../context/gameContext";

export default function StartGame() {
  const { isWon } = useContext(GameContext);

  return (
    <>
      <main>
        <div className="center" style={{ padding: '40px 0 20px 0' }}>
          <div style={{ lineHeight: '2rem' }}>
            <h1 style={{ fontSize: '2rem' }}>[ Hangman Game ]</h1>
          </div>
        </div>
        {!isWon && <HangmanAnimation/>}
        <Alphabet/>
      </main>
    </>
  )
}