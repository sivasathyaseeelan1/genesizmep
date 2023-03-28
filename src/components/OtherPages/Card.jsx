import React from 'react'

const Card = ({props}) => {
  return (
    <div className=' flex flex-col justify-center items-center gap-5 text-center '>
      <h4 className=' text-7xl font-bold'>{props.num}</h4>
      <h3 className=' text-4xl font-bold'>{props.title}</h3>
      <p className=' text-xl'>{props.content}</p>
    </div>
  )
}

export default Card