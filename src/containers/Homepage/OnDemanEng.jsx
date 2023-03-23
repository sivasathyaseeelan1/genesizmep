import React from 'react'

const OnDemandEng = () => {
  return (
    <div className=' py-28 px-5 md:px-20'>
        <div><h2 className=' text-xl ss:text-2xl text-center md:text-5xl mb-7'>ON DEMAND ENGINEERING SERVICES</h2></div>
        <div className='flex md:flex-row flex-col gap-3'>
            <div className=' text-sm ss:text-xl'>
                <p className='mb-4 text-textGrey'>Not every MEP designing challenge requires an entire team of engineers, lengthy proposals and long discussion hours. 
                Maybe your team needs some additional help, authorities looking for letters or the architect wants drawings checked by experts. 
                NY Engineers can be your partner in such situations.</p>
            <p className='mb-4'><strong>Get engineering help within one week, in 3 easy steps with our On Demand Engineering Services.</strong></p>
               <a className=' flex justify-center items-center'> <button className=' rounded-xl text-center px-4 py-3 bg-black text-white hover:bg-textOrange hover:scale-110 transition-all duration-300'>Get your design done in record time</button></a>
            </div>
            <div>
                <img className=' md:min-w-[300px]' src='/public/assets/homepage/VES.webp'></img>
            </div>
        </div>
    </div>
  )
}

export default OnDemandEng