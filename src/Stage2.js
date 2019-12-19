import React, { useState } from 'react'
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

export default withRouter((props) => {
  const [number1, setNumber1] = useState('9')
  const [number2, setNumber2] = useState('9')
  const [number3, setNumber3] = useState('9')
  const [number4, setNumber4] = useState('99')
  const [number5, setNumber5] = useState('999999')
  const Handle = Slider.Handle;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  const fire = (text) => {
    Swal.fire({
      title: 'Nope',
      text: text,
    })
  }

  const checkNumber = (number1 === '5' && number2 === '7' && number3 === '4' && number4 === '65' && number5 === '221108')

  return (
    <div className='middle-page'>
      <p>Please enter the number: 57465221108 below to verify that you are human</p>
      <p>{number1 + number2 + number3 + number4 + number5}</p>
      <div className='buttons'>
        <button className='digit-button' onClick={() => setNumber1(Math.floor(Math.random() * 10).toString())}>1</button>
        <button className='digit-button' onClick={() => setNumber2(Math.floor(Math.random() * 10).toString())}>2</button>
        <button className='digit-button' onClick={() => setNumber3(Math.floor(Math.random() * 10).toString())}>3</button>
        <button className='digit-button' onClick={() => fire("While you wait for the waiter, in that moment, do you not become the waiter?")}>4</button>
        <button className='digit-button' onClick={() => {
          let n = Math.floor(Math.random() * 100)
          setNumber4((n < 10) ? '0' + n.toString() : n.toString())
        }}>5</button>
        <button className='digit-button' onClick={() => fire("What happens if you get scared half to death twice?")}>6</button>
        <button className='digit-button' onClick={() => fire("I wonder if caterpillars know that they're going to be butterflies or do they just build the cocoon and be like wtf am I doing?")}>7</button>
        <button className='digit-button' onClick={() => fire("Do you ever realise that there was a moment when your mum or dad put you down as a baby and never picked you up again")}>8</button>
        <button className='digit-button' onClick={() => fire("Is there a synonym for synonym?")}>9</button>
        <button className='digit-button' onClick={() => fire("When you clean a vacuum you become the vacuum cleaner")}>10</button>
        <button className='digit-button' onClick={() => fire("If tomatoes are a fruit then ketchup is a smoothie")}>11</button>
      </div>
      <Slider min={0} max={999999} defaultValue={500000} onChange={value => {
        let n = value.toString()
        while(n.length < 6)
          n = '0' + n
        setNumber5(n)
      }} handle={handle}/>
      {checkNumber
        ? <button className='continue-button' onClick={() => props.history.push('/hoorayYouMadeItToTheFinalStageWellDone')}>Continue...</button>
        : <div style={{"height": "86px"}}/>}
    </div>
  )
})