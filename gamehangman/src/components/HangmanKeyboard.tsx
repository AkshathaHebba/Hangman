import styles from './HangmanKeyboard.module.css';
type keyBoardProps = {
    onKeyPress : (key: string) => void 
    guessedLetters: string[]
    gameStatus: string
}
const HangmanKeyboard = ({guessedLetters, onKeyPress, gameStatus} : keyBoardProps) => {
    const KEYS = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return(
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(10, minmax(50px,1fr))",
                gap: ".9rem"
            }}
        >
            {
                KEYS.map((key) => {
                    const isDisabled = gameStatus === "Lose" || guessedLetters?.includes(key) || false;
                    return <button  className={`${styles.btn} ${isDisabled ? styles.inactive : ''}`}  key={key} onClick={() => onKeyPress(key)}>{key}</button>
                })
            }
        </div>
    )
}
export default HangmanKeyboard;