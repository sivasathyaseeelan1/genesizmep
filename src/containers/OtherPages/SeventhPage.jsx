import React from 'react'

const SeventhPage = () => {
  return (
    <div className='flex flex-col justify-center gap-10 pt-20'>
        <div className='flex gap-8 flex-col md:flex-row justify-center items-center '>
            <img className=' max-h-12 ' src="public/assets/OtherPages/CallIcon.webp"></img>
            <div className='text-center'>
            <p className=' text-xl font-black uppercase'>CALL US NOW</p>
            <h3 className=' text-4xl font-semibold'>+91-868976807696</h3>
            </div>
        </div>
        <h2 className=' uppercase text-5xl text-center'>project portfolio</h2>
        <h5 className=' text-2xl text-center font-thin bg-black text-white py-10 px-1'>We are transparent with our quality of designs and on time submissions.
Take a look at some of our past work.
</h5>
    </div>
  )
}

export default SeventhPage