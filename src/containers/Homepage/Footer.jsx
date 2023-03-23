import React from 'react'
import { Phone,Email } from '@styled-icons/material'


const Footer = () => {
  
    const headerStyle = 'md:text-2xl text-xl font-medium';
    const itemStyle = 'text-sm ss:text-sm'
    const buttonStyle = 'text-xl hover:bg-textOrange transition duration-200 border-solid border-[2px] border-textOrange '
    return (
    <div className=' bg-footerBlack font-jost text-white  p-10'>
       <div className='grid grid-cols-3 items-stretch w-2/3 mx-auto'>

       
        <div className='  flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>ENGINEERING</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col ${itemStyle}`}>
            <a href='#rrrr'>MECHANICAL- HVAC </a>
            <a>ELECTRICAL</a>
            <a>PLUMBING</a>
            <a> FIRE PROTECTION</a>
            <a>FRANCHISE DESIGN</a>
            </div>

        </div>
        <div className=' max-w-max flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>ENGINEERING</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col ${itemStyle}`}>
            <a>CAREER </a>
            <a>ABOUT US</a>
            <a>FAQ'S</a>
            </div>
           
      
          

        </div>
        <div className=' max-w-max flex flex-col gap-2 justify-start items-stretch'>
            <button className={buttonStyle}>REQUEST A PROPOSAL</button>
            <button className={buttonStyle}>CONTACT</button>
            <p>382 NE 191st St , Suite 49674
Miami, Florida 33179</p>
           
            <a><Phone size={15}></Phone> (786) 788-0295</a>
            <a><Email size={15}></Email> info@ny-engineers.com</a>
        </div>
        </div>
    </div>
  )
}

export default Footer