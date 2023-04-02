import React from 'react'

const RequestedServices = ({name}) => {
  
  return (
    <div className=' bg-white min-w-max text-center hover:bg-bgOrange2 py-1 px-2 flex gap-2 justify-start'>
        
        <a className='text-black'>{name}</a>
    </div>
  )
}

export default RequestedServices