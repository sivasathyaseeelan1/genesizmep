import React from 'react'

const LandingPage = () => {
  return (
    <div className=' bg-backgroundImage text-center flex justify-center items-center mb-6 flex-col py-12 gap-3'>
        <div className='text-2xl ss:text-4xl md:text-6xl my-7'><h1>THE FRANCHISE EXPERTS</h1></div>
        <div className='text-xl ss:text-2xl md:text-4xl text-textOrange mb-3'><h3>YOUR ONE-STOP FOR ALL MEP DESIGN NEEDS</h3></div>
        <div className='text-lg ss:text-xl md:text-2xl'><h5>Member of IFA supplier forum</h5></div>
        <div className=' px-4 py-2 rounded-2xl bg-black text-white '><button><a>Contact us</a></button></div>
        
    </div>
  )
}

export default LandingPage

