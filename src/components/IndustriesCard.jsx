import React from 'react'

const Card = (props) => {
  return (
    <div className='relative' >
    <img src={`public/assets/homePage/industries/${props.img}`} className=' hover:scale-105 transition duration-500 cursor-pointer w-full'>
        
    </img>
    <span className='hover:bg-white centered relative translate-x-[-50%] translate-y-[-50%] md:bottom-[45%] md:left-[45%] p-2 max-w-max  hover:text-black text-2xl text-white bg-black'>
            {props.name}
        </span>
    </div>
  )
}

export default Card