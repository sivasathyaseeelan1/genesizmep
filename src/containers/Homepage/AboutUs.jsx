import React from 'react'

const AboutUs = () => {
  return (
    <div className=' text-left  flex gap-4 flex-col md:grid md:grid-cols-2 mb-4'>
    <div className='mx-10'>
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7'><h2>About us</h2></div>
    <div className='text-lg ss:text-xl  mb-7 text-textGrey'><p>We are one of the fastest growing MEP design firms in the franchise construction industry. We have worked with more than 100+ leading franchise brands & completed over 1000+ projects across multiple sectors. We pride ourselves on having a fast turnaround while providing cost effective solutions. 
    We are licensed in 50 states and are your one stop shop for all MEP design needs.</p></div>
    </div>
    <div>
      <img src='public/assets/homepage/about_us_image.webp'></img>
    </div>
   
    </div>
  )
}

export default AboutUs