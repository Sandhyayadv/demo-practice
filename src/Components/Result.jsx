import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Result = () => {
  const {correct,setExit,setStart,quizzes,setCorrect}=useContext(QuizContext)

  const playAgain=()=>{
    setExit(false)
    setStart(false)
    setCorrect(0)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[50%] border shadow-lg'>
       <h1 className='text-4xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h1>
       <button className='h-[30px] px-3 bg-green-700 text-white' onClick={playAgain}>PlayAgain </button>
      </div>
    </div>
  )
}

export default Result
