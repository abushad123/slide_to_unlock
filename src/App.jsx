import React, { useState } from 'react'
import Slide from './components/Slide'
import { AiOutlineUnlock } from "react-icons/ai";
import './App.css'

function App() {
  const [lock, setLock] = useState(0);
  const [click, setClick] = useState(100);
  const handleLock = (e) => {
    console.log(e.target.value);
    setLock(e.target.value);
  }

  const handleClick = (e) => {
    setLock("0");
    console.log(lock);
  }
  return (
    <>
    <div className={`${lock == "100" && 'bg-lock3 rounded-lg'} bg-lock2 bg-no-repeat rounded-lg`}>
      <div className={`flex items-end justify-center pb-10 w-64 h-96 rounded-lg content-end   ${lock != "100" && 'opacity-50 bg-slate-500'}`}>
        <div>{lock == 100 ? (<AiOutlineUnlock  color='white' size="50px" onClick={handleClick}/>) : (<Slide hadleVlaue={lock}  hadleInput={handleLock} />)}</div>
      
         
      </div>
    </div>
     
    </>
  )
}

export default App
