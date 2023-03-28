import React,{useEffect, useState} from 'react'

const RequestedServices = ({name}) => {
  const [SI,setSi]=useState(1);
  useEffect(()=>{
    setSi(SI+1);
  },[])  
  return (
    <div className=' bg-white hover:bg-bgOrange2 py-1 px-2 flex gap-2 justify-start'>
        <span className='number bg-bgOrange2 w-6 h-6 '>{SI}</span>
        <a className='text-black'>{name}</a>
    </div>
  )
}

export default RequestedServices