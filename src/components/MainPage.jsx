import React from 'react';
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main>
      <div className="container">
        <div className="center" style={{ lineHeight: '6rem' }}>
          <h1 style={{ fontSize: '3.5rem' }}>[ Hangman Game ]</h1>
          <Link to={'/start/game'} style={{ textDecoration: 'none' }}>
            <button className="start-btn" role="button">
              Start Game
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainPage;