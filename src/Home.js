import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
  return (
    <div className='middle-page'>
      <p>/\</p>
      <p>Tada</p>
      <p>Merry Christmas</p>
      <p>Welcome Human Being</p>
      <p>Click the button below to start.</p>
      <p>I hope you have a lot of time to spare...</p>
      <button className='start-button' onClick={() => props.history.push('/ChristmasChallenge/stage1')}>Start</button>
    </div>
  )
})