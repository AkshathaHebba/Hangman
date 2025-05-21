type hangmanProps = {
    word: string
    guessdList: string[]
}
const HangmanWord = ({word, guessdList = []} : hangmanProps) => {
    return(
        <div style={{display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "Monospace"}}>
                {word.split('').map((letter, index) => {
                    return (
                        <span key={`${letter}-${index}`} style={{borderBottom: ".1em solid", marginBottom:'2rem'}}>
                            <span style={{visibility: guessdList.length > 0 && guessdList.includes(letter) ? "visible" : "hidden" }}>
                                  {letter}
                            </span>
                        </span>
                    )
                })}
        </div>
    )
}
export default HangmanWord;