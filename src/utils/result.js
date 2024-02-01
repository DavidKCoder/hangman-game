import React from "react";
import { Link } from "react-router-dom";
import winSvg from "../img/win.svg";

const RELOAD_BTN =
  <button
    className="start-btn"
    role="button"
    style={{ marginTop: '20px', width: '200px', fontSize: '1rem' }}
    onClick={() => window.location.reload()}>
    <Link to={'/'} style={{ textDecoration: 'none', color: 'var(--sunburst-orange)' }}>
      Play again
    </Link>
  </button>

export const WON = (word) =>
  <div className="center" style={{ padding: 0, lineHeight: '1.5rem' }}>
    <img
      src={winSvg}
      width={200}
      typeof="svg"
      alt="hangman"
      style={{ padding: '0 0 50px 0', }}
    />
    <h2>You WON!</h2>
    <h5>The word was: <span style={{ color: '#FFF' }}>{word}</span></h5>
    {RELOAD_BTN}
  </div>

export const LOSE = (word) =>
  <div className="center" style={{ padding: '50px 0', lineHeight: '1.5rem' }}>
    <h2>You LOST!</h2>
    <h5>The word was: <span style={{ color: '#FFF' }}>{word}</span></h5>
    {RELOAD_BTN}
  </div>