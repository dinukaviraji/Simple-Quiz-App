import { useEffect, useState } from "react";

export default function Timer({timeOut, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        setTimeout(onTimeout,timeOut);
    }, [timeOut, onTimeout])
 
    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prev) => prev -100);
        }, 100);
    }, [])

    return (
        <progress id="question-time" value={remainingTime} max={timeOut}/>
        
    )
}