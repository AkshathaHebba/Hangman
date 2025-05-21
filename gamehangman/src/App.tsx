import { useCallback, useState } from 'react'
import words from './wordList.json'
import './App.css'
import HangmanDrawing from "./components/HangmanDrawing.tsx";
import HangmanWord from "./components/HangmanWord.tsx";
import HangmanKeyboard from "./components/HangmanKeyboard.tsx";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() =>{
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
  })
 const [guessedLetters,setGuessedLetters] = useState<string[]>([]);
 const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
 const [chances, setChances] = useState(6);
 const [gameStatus,setGameStatus] = useState<"Inprogress"|"Win"|"Lose">("Inprogress")

 //Validates the win or lose
 const validateWin = (updatedGuessedLetters : string[]) =>{
  const result = wordToGuess.split('').every((word) => updatedGuessedLetters.includes(word));
  if(result){
    setGameStatus("Win")
  }else{
    if(chances <= 0){
      setGameStatus("Lose")
    }
  }
 }

 //Handles the key press and updates win or lose
 const handleKeyPress = (key: string) =>{
  if(!guessedLetters.includes(key)){
    const updatedGuessedLetters = [...guessedLetters, key];
    setGuessedLetters(updatedGuessedLetters);
      if(!wordToGuess.includes(key)){
        setChances((prev) => prev - 1)
      }
   if(gameStatus === "Inprogress"){
    validateWin(updatedGuessedLetters)
  }
 }
 }

  return (
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        margin: "0 auto",
        alignItems: "center"
      }}>
        <div style={{fontSize: "2rem", textAlign: "center"}}>
         {
            gameStatus === "Inprogress" ? ("Guess the word") : 
            gameStatus === "Win" ? 
            ("You Win") : 
            (
              <>
              <span  style={{fontSize: '4rem', marginBottom: '0.5rem'}}>You Lose 🤪</span><br />
              <span style={{color: 'Green', fontSize: '2rem'}}>{wordToGuess}</span>
              </>
            )
         }
        </div>
        <HangmanDrawing numberOfGuesses = {incorrectLetters.length}></HangmanDrawing>
        <HangmanWord word ={wordToGuess} guessdList={guessedLetters}></HangmanWord>
          <div
              style={{alignSelf: "stretch", minWidth: "600px"}}>
              <HangmanKeyboard guessedLetters={guessedLetters} onKeyPress = {handleKeyPress} gameStatus={gameStatus}></HangmanKeyboard>
          </div>
      </div>
  )
}

export default App
