import React from 'react'

const LandingPage = ({props}) => {
  return (
    <div className={`flex flex-col  items-stretch py-20 px-10 md:mt-40 ${props.className}`}  >
        
        <div className=' flex flex-col gap-3 text-left opacity-100 z-10 '>
            <h6 className=' text-2xl font-jost font-bold'>GENESIZ MEP</h6>
            <h1 className=' uppercase text-6xl font-bold'>
                {props.name}
            </h1>
            <h6 className=' text-2xl font-thin font-jost'>{props.details}</h6>
            <h4 className=' text-3xl font-jost font-semibold'>YOUR ONE STOP SHOP FOR ALL MEP NEEDS!</h4>
        </div>
    </div>
  )
}

export default LandingPage