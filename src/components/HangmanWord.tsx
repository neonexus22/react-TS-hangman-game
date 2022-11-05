import React from 'react'

type HangmanWordProps = {
  isReveal?: boolean
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  isReveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex space-x-4 font-bold text-3xl uppercase">
      {wordToGuess.split('').map((letter, index) => (
        <span className="flex flex-col" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || isReveal
                ? 'inline-block'
                : 'hidden'
            }
            color: ${
              isReveal && !guessedLetters.includes(letter)
                ? 'text-red-600'
                : 'text-slate-900'
            }
            `}
          >
            {letter}
          </span>
          <span
            className={`w-5 h-1 bg-slate-900 ${
              !guessedLetters.includes(letter) && !isReveal ? 'mt-9' : ''
            }`}
          />
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
