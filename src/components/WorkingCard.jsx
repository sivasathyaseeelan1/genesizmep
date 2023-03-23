import React from 'react'
import { BarChartSteps } from '@styled-icons/bootstrap'
const WorkingCard = (props) => {
  return (
    <div className={ ` mx-auto flex flex-col justify-evenly items-center py-7 px-3 ${props.orange ? "bg-white":"bg-black"} max-w-[300px] py-7 px-4 gap-10 rounded-3xl shadow-xl `} >
        <BarChartSteps className={`${props.orange? " text-textOrange":"text-white"} text-xl ss:text-2xl`} size={30}></BarChartSteps>
        <h3 className={`${props.orange? " text-black":"text-white"} text-xl ss:text-2xl`}>{props.name}</h3>
        <p className={`${props.orange? " text-textGrey":"text-white"} text-lg ss:text-xl`}>{props.details}</p>
    </div>
  )
}

export default WorkingCard