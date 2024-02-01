import React, { useContext } from "react";
import '../styles/letter.css'
import * as result from "../utils/result";
import GameContext from "../context/gameContext";

export default function Alphabet() {
  const {
    alphabet,
    selectedWord,
    selectedLetter,
    word,
    isWon,
    attemptsCount,
    handleClickLetter
  } = useContext(GameContext);


  if (isWon) {
    return result.WON(word)
  }

  if (!( attemptsCount )) {
    return result.LOSE(word)
  }

  return (
    <div className="center">
      <div style={{
        width: '600px',
        padding: '10px 0 0 0',
        margin: '0 auto'
      }}>
        <strong style={{
          fontSize: '4rem',
          color: '#FFF',
          letterSpacing: '15px'
        }}>
          {word.split('').map((letter, index) => (
            <span key={index}>
              {selectedLetter.get(letter) ? letter : '_'}
            </span>
          ))}
        </strong>
      </div>
      <div style={{ padding: '15px 0' }}>
        <span>
          You have {attemptsCount} attempts
        </span>
      </div>

      <div className="alphabet-grid">
        {alphabet.map((letter) => (
          <button
            key={letter}
            type="button"
            className="button"
            onClick={handleClickLetter}
            disabled={selectedWord.includes(letter)}
          >
            <div className={`button-top ${selectedWord.includes(letter) ? 'button-top-disable' : ''}`}>{letter}</div>
            <div className="button-bottom"/>
            <div className="button-base"/>
          </button>
        ))}
      </div>
    </div>
  )
}