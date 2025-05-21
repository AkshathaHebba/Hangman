
import React from "react"
const HEAD = (
    <div style = {{width: "50px", height: "50px", borderRadius: "100%", border: " 10px solid blue", position: "absolute", top: "50px", right: "-30px"}}>
    </div>
)
const BODY = (
    <div style = {{width: "10px", height: "100px", background: "blue", position: "absolute", top: "120px", right: "0"}}>
    </div>
)
const RIGHT_ARM = (
    <div style = {{width: "100px", height: "10px", background: "blue", position: "absolute", top: "150px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom"}}>
    </div>
)
const LEFT_ARM = (
    <div style={{width: "100px", height:"10px", background: "blue", position:"absolute", top: "154px", right: "0px", rotate: "30deg", transformOrigin:"right bottom"}}>
    </div>
)
const LEFT_LEG = (
    <div style={{width: "100px", height: "10px", background: "blue", position: "absolute", top: "210px", right: "10px", rotate:"-30deg", transformOrigin:"top right"}}>
    </div>
)
const RIGHT_LEG = (
    <div style={{width: "100px", height: "10px", background: "blue", position: "absolute", top: "210px", right: "-90px", rotate:"30deg", transformOrigin:"bottom left"}}>
    </div>
)
type HangmanDrawingProps = {
    numberOfGuesses: number;
} 
const allBodyParts = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];
const HangmanDrawing = ({numberOfGuesses} : HangmanDrawingProps ) => {
    const remainingBodyParts = allBodyParts.slice(0,numberOfGuesses)
    return(
        <div style={{
            position: "relative"
        }}>
            {remainingBodyParts.map((bodyPart, index) => {
            return (
                <React.Fragment key={index}>
                    {bodyPart}
                </React.Fragment>
            );
        })}
            <div style={{height: "50px", width: "10px", background: "blue", position: "absolute", top: 0, right: 0}}></div>
            <div style={{height: "10px", width: "250px", background: "blue", marginLeft: "120px"}}></div>
            <div style={{height: "400px",width: "10px",background:"blue", marginLeft: "120px"}}></div>
            <div style={{height: "10px", width: "250px", background: "blue"}}></div>
        </div>
    )
}
export default HangmanDrawing;