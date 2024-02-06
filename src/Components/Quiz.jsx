import React, { useState } from 'react'
import { useContext } from 'react';
import { QuizContext } from '../Context/QuizHolder';

const Quiz = () => {
    const[current,setCurrent]=useState(0);
    // const {correct}=useContext(QuizContext);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
    {/* <h1>{correct}</h1> */}
      <Box current={current} next={setCurrent}/>
    </div> 
  )
}

export default Quiz



const Box = ({current,next}) => {

    const {quizzes,correct,setCorrect,setExit}=useContext(QuizContext)
    const[ans,setAns]=useState('')
    const saveHandler=()=>{
       if(quizzes[current].correct===ans){
        setCorrect(correct+1)
       }
        setAns('');
        if((current+1)===quizzes.length){
          setExit(true)
        }else{     
       next(current+1)
        }
    }

  return (
    <div className='w-[50%] border shadow-lg'>
      <div className='p-2 text-2xl'>{current+1} {` ) `} {quizzes[current].question}</div>
      <div className='grid grid-cols-2 mt-3'>
        <div className={`p-2 border ${ans==='a' ? 'bg-blue-400 hover:text-white':''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns('a')}>{quizzes[current].a}</div>
        <div className={`p-2 border ${ans==='b' ? 'bg-blue-400 hover:text-white':''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns('b')}>{quizzes[current].b}</div>
        <div className={`p-2 border ${ans==='c' ? 'bg-blue-400 hover:text-white':''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns('c')}>{quizzes[current].c} </div>
        <div className={`p-2 border ${ans==='d' ? 'bg-blue-400 hover:text-white':''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns('d')}>{quizzes[current].d}</div>
      </div>
      <div className='flex justify-between'>
        <div className='h-[30px] px-3 bg-orange-700 text-white' onClick={()=>setAns("")}>Reset</div>
        <div className='h-[30px] px-3 bg-green-700 text-white' onClick={saveHandler}>Save & Next </div>
        <div className='h-[30px] px-3 bg-red-700 text-white'onClick={()=>setExit(true)}>Exit</div>
      </div>
    </div>
  )
}

