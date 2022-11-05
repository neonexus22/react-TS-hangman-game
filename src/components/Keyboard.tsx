const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

const keyClass = `px-3 py-2 font-medium border border-slate-400 
  hover:bg-green-600 hover:border-green-400 hover:text-white
  focus:bg-green-600 focus:border-green-400 focus:text-white
  disabled:hover:bg-white disabled:border-slate-400 disabled:text-slate-900
  `
const active = `bg-green-500 text-white`
const inactive = ' disabled:opacity-30'

type KeyboardProps = {
  disabled: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className="flex flex-col items-center mb-32 space-y-4">
      <div className="flex space-x-2">
        {keys1.map((key) => (
          <button
            key={key}
            onClick={() => {
              addGuessedLetter(key)
            }}
            disabled={
              inactiveLetters.includes(key.toLowerCase()) ||
              activeLetters.includes(key.toLowerCase()) ||
              disabled
            }
            className={`${keyClass} ${
              activeLetters.includes(key.toLowerCase()) ? `${active}` : ''
            } ${
              inactiveLetters.includes(key.toLowerCase()) ? `${inactive}` : ''
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {keys2.map((key) => (
          <button
            key={key}
            onClick={() => {
              addGuessedLetter(key)
            }}
            disabled={
              inactiveLetters.includes(key.toLowerCase()) ||
              activeLetters.includes(key.toLowerCase()) ||
              disabled
            }
            className={`${keyClass} ${
              activeLetters.includes(key.toLowerCase()) ? `${active}` : ''
            } ${
              inactiveLetters.includes(key.toLowerCase()) ? `${inactive}` : ''
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {keys3.map((key) => (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={
              inactiveLetters.includes(key.toLowerCase()) ||
              activeLetters.includes(key.toLowerCase()) ||
              disabled
            }
            className={`${keyClass} ${
              activeLetters.includes(key.toLowerCase()) ? `${active}` : ''
            } ${
              inactiveLetters.includes(key.toLowerCase()) ? `${inactive}` : ''
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Keyboard
