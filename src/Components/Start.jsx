import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Start = () => {

  const {setStart}=useContext(QuizContext)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <button className="border border-orange-600 p-4 text-5xl rounded bg-pink-600" onClick={()=>setStart(true)} >Start</button>
    </div>
  )
}

export default Start
