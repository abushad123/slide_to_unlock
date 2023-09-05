import { useState } from 'react'
import './style.css'

function Slide({hadleVlaue, hadleInput}) {

  return (
    <>
       <input  type="range" defaultValue={hadleVlaue} onChange={hadleInput}  className="slider w-32 h-8 bg-slate-100 rounded-full border appearance-none cursor-pointer dark:bg-slate-50"/>
    </>
  )
}

export default Slide
