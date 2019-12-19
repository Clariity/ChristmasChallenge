import React, { useState, useEffect } from 'react'
import DecibelMeter from 'decibel-meter'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
  const [target, setTarget] = useState(-100 + Math.ceil(Math.random() * 40))
  const [time, setTime] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 180000);
  });

  const meter = new DecibelMeter(Math.random());
  document.addEventListener('DOMContentLoaded', () => {
    const level = document.getElementById('db-level')
    const hits = document.getElementById('hits')
    let n = 0;
    meter.listenTo(0, (dB, percent, value) => {
      if ((Math.ceil(Math.random() * 5)) === 1)
        level.textContent = `${Math.ceil(dB)} dB`
      if (Math.ceil(dB) === target) {
        hits.textContent = `Hits: ${n++}/500`
        setTarget(-90 + Math.ceil(Math.random() * 50))
      }
    })
  });
  
  return (
    <div className='middle-page'>
      Hit the dB levels below to complete the task
      <p>Target: {target} dB</p>
      <p id='db-level'>0 dB</p>
      <p id='hits'>Hits: 0/500</p>
      {time && 
        <>
          <p>Yeah... you've just screamed at the screen for 3 minutes for no reason</p>
          <button className='continue-button' onClick={() => props.history.push('/ChristmasChallenge/betYouWishYouWroteThatDown')}>Continue...</button>
        </>}
    </div>
  )
})