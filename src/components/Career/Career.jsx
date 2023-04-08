import React from 'react'
import Footer from '../Footer/Footer'
import { useState } from 'react';
const Career = () => {
  const [email, setEmail] = useState('');
  const handlesubmit=()=>{

    if(email===''){
      alert('Empty email Address')}
    else
    alert('Submitted Successfully')
  }
  const handlesubmit1=()=>{

    if(email===''){
      alert('Empty email Address')}
    else
    alert('Submitted Successfully')
  }
  return (
    <div >
  <h1 className="max-w-sm font-bold text-3xl  mx-auto text-center font-serif text-yellow-500 my-4">
        Career
      </h1>
      <div className='max-w-[1320px] mx-auto border my-7'>
       
      <div className='grid md:grid-cols-2 grid-cols-1 place-items-center '>
        <div className='flex flex-col mx-auto'>

        <h1 className='font-bold text-4xl my-5'><span className='text-yellow-500'>Frontend</span><span className='text-indigo-600'> Developer</span></h1>
        <input type='email' value={email}
              onChange={(e) => setEmail(e.target.value)} className='my-4 border border-black outline-none px-2' placeholder='Email Address'/>
        <span>Upload Your Resume:</span>
        <input type='file' className='my-4' />
        <button onClick={handlesubmit} className='w-[100px]'>Submit</button>
        </div>
        <img src='https://www.kindpng.com/picc/m/2-24256_man-guy-male-business-laptop-computer-ethnic-sitting.png' className='w-[450px] h-[450px] my-4'/>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 place-items-center '>
        <div className='flex flex-col mx-auto'>

        <h1 className='font-bold text-4xl my-5'><span className='text-yellow-500'>Backend</span><span className='text-indigo-600'> Developer</span></h1>
        <input type='email' className='my-4 border border-black outline-none px-2' placeholder='Email Address'/>
        <span>Upload Your Resume:</span>
        <input type='file' className='my-4'/>
        <button className='w-[100px] ' onClick={handlesubmit1}>Submit</button>
        </div>
        <img src='https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg' className='w-[450px] h-[450px] my-4'/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Career