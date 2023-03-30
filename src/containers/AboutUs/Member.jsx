import React from 'react'

const Member = () => {
  return (
    <div className=' flex flex-col justify-center items-center py-20 gap-5'>
        <h2 className=' font-anton text-8xl uppercase text-center mb-3'>director</h2>
        <img src='public/assets/Aboutus/profile.jpg'></img>
        <h3 className=' font-jost text-4xl text-center font-semibold'>WE WOULD LOVE TO HEAR FROM YOU!</h3>
        <h5 className=' text-2xl text-center font-semibold font-jost'>
        Contact us if you would like to discuss any projects you feel we can help with.
        </h5>
        <button className=' text-center border-solid border-[1px] border-black outline-none bg-white text-black hover:bg-black hover:text-white font-jost font-semibold text-2xl px-20 py-2'>Get In Touch</button>
    </div>
  )
}

export default Member