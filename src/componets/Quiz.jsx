import questions from './questions.js'
import { useState, useCallback} from 'react'
import complete from '../assets/quiz-complete.png'
import Timer from '../componets/Timer.jsx'

export default function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const activeQuestionIndex = selectedAnswers.length;

    const completed = activeQuestionIndex === selectedAnswers.length;

    function handleSelectedAnswer(userAnswer) {
        setSelectedAnswers((prev) => {
            return [...prev, userAnswer]
        })
    }

    const handleSkipAnswer = useCallback (() => {
        
    });

    // if (completed) {
    //     return (
    //         <div id='summary'>
    //             <img src={complete} alt='quiz completed'/>
    //             <h2> Quiz Completed! </h2>
    //         </div>
    //     )
    // }

    const shuffled = [...questions[activeQuestionIndex].answers];
    shuffled.sort(() => Math.random() - 0.5 )

    return(
        <div id='quiz'>
        <div id='question'>
            <Timer timeOut={10000} onTimeout={() => handleSelectedAnswer(null)}/>
            <h2> {questions[activeQuestionIndex].text} </h2>
            <ul id='answers'>
                {shuffled.map(answer => (
                    <li key={answer} className='answer'>
                        <button onClick={() => handleSelectedAnswer(answer)}> {answer} </button> 
                    </li>
                ))
                
                }
            </ul>
        </div>
        </div>
    )
}