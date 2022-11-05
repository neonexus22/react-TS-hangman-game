import { useEffect, useState, useCallback } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from './wordList.json'

const guessWord = () => words[Math.floor(Math.random() * words.length)]

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(guessWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.toLowerCase().includes(letter),
  )
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter.toLowerCase()) || isWinner || isLoser)
        return
      setGuessedLetters((prev) => [...prev, letter.toLowerCase()])
    },
    [guessedLetters, isWinner, isLoser],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.toLowerCase().match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key.toLowerCase())
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key === 'Enter' && !isLoser && !isWinner) {
        e.preventDefault()
        setWordToGuess(guessWord())
        setGuessedLetters([])
      } else {
        return
      }
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  console.log({ wordToGuess })
  return (
    <div className="flex flex-col items-center space-y-10 max-w-3xl m-auto mt-10">
      <div className="text-2xl self-center">
        <div>Welcome to Hangman Game</div>
        {isWinner && (
          <div className="text-green-600 text-lg text-center">
            'Winner! Refresh to play again'
          </div>
        )}
        {isLoser && (
          <div className="text-pink-600 text-lg text-center">
            'Nice Try, refresh to try again'
          </div>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        isReveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <Keyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter),
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  )
}

export default App
