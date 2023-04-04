import React from 'react'

const AddressCard = ({data}) => {
  return (
    <div className=' flex flex-col gap-3'>
    <p><strong>{data.name}</strong></p>
    <p>{data.content}</p>
   <a href={data.link}><button className=' px-4 relative py-2 rounded-2xl bg-black text-white '>Get directions</button></a> 
    </div>
  )
}

export default AddressCard