import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector((state:any) => state.counter.counter)
  const showw = useSelector((state:any) => state.counter.show)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increament'})
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5})
  }

  const decrementHandler = () => {
    dispatch({type: 'decreament'})
  }

  const toggleCounter = () => {
    dispatch({type: 'toggleCounter'})
  }
  return (
    <div>
      <div>
      <Button children={'artir'} onClick={() => incrementHandler()}/>
      <Button children={'azalt'} onClick={() => decrementHandler()}/>
      <Button children={'5 artir'} onClick={() => increaseHandler()}/>
      <Button children={'gizlet/goster'} onClick={() => toggleCounter()}/>
      </div>
      {showw && <div className="count">
        {counter}
      </div>}
      
    </div>
  )
}

export default App
