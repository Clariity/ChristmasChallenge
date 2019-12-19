import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
  const [flipped, setFlipped] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [random, setRandom] = useState(1)

  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function(event) {
    window.history.go(1);
  };

  
  console.log(random)

  useEffect(() => {
    setFlipped(Array(512).fill(false))
    setRandom(Math.ceil(Math.random() * 512))
    setLoaded(true)
  }, [setFlipped])

  const setFlippedValue = (index, value) => {
    let newFlipped = Array(512).fill(false)
    newFlipped[index] = value
    setFlipped(newFlipped)
  }

  return (
    <div className='stage1'>
      {loaded && flipped.map((value, index) => {
        return  <ReactCardFlip key={index} isFlipped={value}>
                  <div className='card-front' onClick={() => setFlippedValue(index, true)}/>
                  <div 
                    className={index === (random - 1) ? 'card-back-correct' : 'card-back'} 
                    onClick={index === (random - 1) 
                      ? () => props.history.push('/youAreNotGoingToGuessTheseURLsBTW') 
                      : () => setFlippedValue(index, false)
                    }
                  >
                    {index === (random - 1)
                      ? 'XKCD'
                      : index + 1
                    }
                  </div>
                </ReactCardFlip>
      })}
    </div>
  )
})