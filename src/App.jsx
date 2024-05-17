import { useState, useEffect, useCallback } from "react"

function App() {
  const [time,setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false)

  const startTimer = useCallback(() => {
    setTimerOn(true)
    // return time + 1;
  }, [])

  const stopTimer = useCallback(() => {
    setTimerOn(false)
  }, [])


  useEffect(() => {
    let interval = null;
    if(timerOn){
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn])

  return (
    <>
      <h1>Stopwatch</h1>
      <label>Time: 0:0{time}</label>
      <br/>
      <button onClick={startTimer} name="Start">Start</button>
      <button onClick={stopTimer} name="Stop">Stop</button>
    </>
  )
}

export default App
