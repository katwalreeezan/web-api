import React from 'react'

const Footer = () => {
  return (<div className='border-t border-b py-12 border-slate-300 mt-7 mb-2  '> 
 

        
    <div className='my-7 grid grid-cols-1 md:grid-cols-3  px-4'>
   
      <div className='my-2 md:text-left text-center mx-auto z-10'>
        <span className="text-4xl font-sans text-yellow-500 font-extrabold">
            NA
          </span>
          <span className="text-4xl font-sans font-extrabold text-indigo-600">
            XA
          </span>
          <p>Pespicola, Kathmandu</p>
        <p>infonaxanp@gmail.com</p>
        </div>
        
        <div className='mx-auto md:text-left text-center my-2 z-10'>
        <h1 className='font-bold underline'>Services</h1> 
        <p className='my-1'>Software & Apps Development</p>
        <p className='my-1'>GIS Mapping & Analysis</p>
        <p className='my-1'>Data Collection & Visualization</p>
        <p className='my-1'>ICT & Digital Development Research</p>
        </div>
        <div className='mx-auto text-center md:text-left my-2 z-10'>
        <h1 className='font-bold underline'>Company</h1> 
        <p className='my-1'>About us</p>
        <p className='my-1'>Work with Us</p>
        <p className='my-1'>Awards and Acheivements</p>
        </div>
    </div>
  </div>
  )
}

export default Footer