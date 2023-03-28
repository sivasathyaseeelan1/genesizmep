import React from 'react'

const LandingPage = ({props}) => {
  return (
    <div className=' flex flex-col md:grid md:grid-cols-2 items-stretch py-20 px-10'>
        <div>
        <img src="public/assets/OtherPages/hvac.png"></img>
        </div>
        <div className=' flex flex-col gap-3 text-left'>
            <h6 className=' text-2xl font-jost font-semibold'>NY ENGINEERS</h6>
            <h1 className=' uppercase text-6xl'>
                {props.name}
            </h1>
            <h6 className=' text-2xl font-thin font-jost'>{props.details}</h6>
            <h4 className=' text-3xl font-jost font-semibold'>YOUR ONE STOP SHOP FOR ALL MEP NEEDS!</h4>
        </div>
    </div>
  )
}

export default LandingPage