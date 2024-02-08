import React from 'react'
import logo from './pusheen.gif';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const onclick = () =>{
        navigate('/iloveyou')
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='v'>
          Will you be my Valentine?
        </p>
        <div className='BUTTON'>
        <button title='YES' className='green' onClick={onclick}>YES</button>
        <button className='red'>NO</button>
        </div>
      </header>
    </div>
  )
}

export default Home