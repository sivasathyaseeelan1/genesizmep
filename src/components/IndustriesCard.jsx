import React from 'react'

const Card = (props) => {
  return (
    <div >
    <img src={`public/assets/homePage/industries/${props.img}`} className=' hover:scale-105 transition duration-500 cursor-pointer'>
        
    </img>
    <div className='hover:bg-white relative bottom-1/3 md:bottom-[45%] md:left-[45%] p-2 max-w-max  hover:text-black text-white bg-black'>
            {props.name}
        </div>
    </div>
  )
}

export default Card