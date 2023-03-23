import React from 'react'

const ClientPage = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 gap-x-3 mx-8 py-9'>
    <div className='flex flex-col justify-center md:text-left text-center'>
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7  ' ><h2>WHY NY ENGINEERS
    </h2></div>
    

    <div ><a><button className=' bg-black text-white px-5 text-lg ss:text-xl md:text-2xl  py-2 rounded-lg mb-5'>Get you quote</button></a></div>
    </div>
    

        <div className='flex flex-col '>
            <div className='bg-black flex-1 py-5 text-white flex flex-col justify-center items-center '><h2 className='text-xl ss:text-3xl md:text-4xl'>1000+</h2>
            <p className='text-sm ss:text-lg'>Projects completed</p>
            </div>
            <div className='bg-white flex-1 py-5 text-black flex flex-col justify-center items-center'><h2 className='text-xl ss:text-3xl md:text-4xl'>50%</h2>
            <p>faster Turnaround</p>
            </div>
            <div className='bg-black flex-1 py-5 text-white flex flex-col justify-center items-center'><h2 className='text-xl ss:text-3xl md:text-4xl'>80%</h2>
            <p>First Time Approval</p>
            </div>
        </div>

        <div>
          <img src='/public/assets/homepage/clients.png' className=' md:min-h-[600px]'></img>
        </div>

    </div>
  )
}

export default ClientPage