import React, { useContext } from "react";
import '../styles/animation.css';
import svg from '../img/hangman.svg';
import GameContext from "../context/gameContext";

export default function HangmanAnimation() {
  const { wrongLetters } = useContext(GameContext);

  return (
    <div style={{
      width: '600px',
      height: '180px',
      display: 'grid',
      margin: '0 auto 20px auto',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        width: '130px',
        height: '15px',
        backgroundColor: '#FFF',
        left: '20px',
        top: '20px',
        visibility: wrongLetters.length >= 3 ? 'visible' : 'hidden'
      }}/>
      <div style={{
        position: 'relative',
        width: '3px',
        height: '40px',
        backgroundColor: '#d70101',
        left: '120px',
        top: '20px',
        visibility: wrongLetters.length >= 4 ? 'visible' : 'hidden'
      }}/>
      <img
        src={svg}
        width={40}
        typeof="svg"
        alt="hangman"
        className={`hangman_svg ${wrongLetters.length >= 6 ? 'animation' : ''}`}
        style={{ visibility: wrongLetters.length >= 5 ? 'visible' : 'hidden' }}
      />
      <div style={{
        position: 'relative',
        width: '18px',
        height: '210px',
        backgroundColor: '#FFF',
        left: '20px',
        top: '-140px',
        visibility: wrongLetters.length >= 2 ? 'visible' : 'hidden'
      }}/>
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '8px',
          backgroundColor: '#FFF',
          top: '-140px',
          visibility: wrongLetters.length >= 1 ? 'visible' : 'hidden'
        }}/>
    </div>
  )
}