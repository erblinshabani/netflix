import {  useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";


export const Question = ({questionTitle, answer}) => {
    const [showAnswer, setShowAnser] = useState(false)

    const handleClick = () => {
        setShowAnser(!showAnswer)
    }

    return (
        <div className="question-and-answer">
            <div className="question" onClick={handleClick}>
                <h2>{questionTitle}</h2>
                {showAnswer ? <FaArrowUp color="#fff" size={21}/> : <FaArrowDown color="#fff" size={21}/>}
            </div>
            {showAnswer && 
            <div className="answer">
                <p>{answer}</p>
            </div>}
        </div>
    )
}