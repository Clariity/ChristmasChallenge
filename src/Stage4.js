import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
  const [input, setInput] = useState('')
  const [incorrect, setIncorrect] = useState()
  const [timerStarted, setTimerStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if(timerStarted) {
      if (!timeLeft) props.history.push('/stage1')
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerStarted, timeLeft, props.history]);

  const checkPassword = () => {
    if(input === 'the 4 digits displayed on the green card in the first task') {
      props.history.push('/hereIsThePasswordYouFilthyAnimal')
    } else {
      setIncorrect(true)
    }
  }
  
  return (
    !timerStarted
    ? <div className='middle-page'>
        <p>GET READY!!!</p>
        <p>You only have 20 seconds to enter the password on the next screen</p>
        <button className='continue-button' onClick={() => setTimerStarted(true)}>Click here when ready...</button>
      </div>
    : <div className='middle-page'>
        <p>{timeLeft}</p>
        <p>Enter the password below:</p>
        <p>Hint: The password is the 4 digits displayed on the green card in the first task</p>
        <input className='text-input' type='text' value={input} onChange={event => setInput(event.target.value)} placeholder="Enter password here"/>
        <button className='continue-button' onClick={checkPassword}>Submit</button>
        {incorrect && <p>NOPE... WRONG PASSWORD SUCKA</p>}
      </div>
  )
})