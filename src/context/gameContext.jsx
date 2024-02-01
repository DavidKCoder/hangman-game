import React, { createContext, useEffect, useState } from "react";

const GameContext = createContext({
  alphabet: [],
  selectedLetter: new Map(),
  selectedWord: '',
  word: '',
  wrongLetters: [],
  attemptsCount: 6,
  isWon: false
});

export function GameContextProvider({ children }) {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const [ selectedLetter, setSelectedLetter ] = useState(new Map());
  const [ selectedWord, setSelectedWord ] = useState('');
  const [ word, setWord ] = useState('');

  const handleClickLetter = (e) => {
    const value = e.target.textContent;
    setSelectedWord(prev => {
      const newWord = prev.concat(value);
      setSelectedLetter(prev => new Map(prev).set(value, value));
      return newWord;
    });
  }

  const wrongLetters = selectedWord.split('').map((letter) => letter).filter((w) => !word.includes(w));

  const attemptsCount = 6 - wrongLetters.length;

  const isWon = word.length ? word.split('').every(letter => selectedWord.includes(letter)) : false;

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const randomWord = data[0]?.toUpperCase();
        setWord(randomWord)
      })
      .catch(error => {
        console.error('Error fetching random word:', error);
      });
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();

      if (alphabet.includes(letter) && !selectedWord.includes(letter) && attemptsCount) {
        handleClickLetter({ target: { textContent: letter } })
      }
    };

    document.addEventListener('keypress', handleKeyDown);

    return () => {
      document.removeEventListener('keypress', handleKeyDown);
    };
  }, [ selectedWord ]);

  return (
    <GameContext.Provider
      value={{ alphabet, selectedWord, selectedLetter, word, wrongLetters, isWon, attemptsCount, handleClickLetter }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext