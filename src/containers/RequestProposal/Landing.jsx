import React from 'react'
import background from "../../../public/assets/request/plan.jpg"

const Landing = () => {
  
  const style = {
    backgroundImage: `url(${background})` ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  }
  return (
    <div className=' bg-fixed mt-20 py-28' style={style}>
    <h1 className=' text-8xl font-dmserif font-bold'>Request Your MEP Engineering Proposal</h1>
    <p className=' text-4xl font-dmserif text-white'>Get Pricing within 24 hours!</p>
    </div>
  )
}

export default Landing