import React from 'react'
import { Phone,Email } from '@styled-icons/material'


const Footer = () => {
  
    const headerStyle = 'md:text-2xl text-xl font-medium';
    const itemStyle = 'text-sm ss:text-sm'
    const buttonStyle = 'text-sm py-2 hover:bg-textOrange min-w-max transition duration-200 border-solid border-[2px] border-textOrange '
    return (
    <div className=' bg-footerBlack font-jost text-white  p-10'>
       <div className='md:grid md:grid-cols-4 items-stretch flex flex-col gap-9 w-2/3 mx-auto'>

       
        <div className='  flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>ENGINEERING</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col uppercase ${itemStyle}`}>
            <a href='/hvac'>HVAC </a>
            <a href='/fireprotection'> FIRE PROTECTION</a>
            <a href='/electrical'>ELECTRICAL</a>
            <a href='/plumbing'>PLUMBING</a>
            
            </div>

        </div>
        
        <div className='  flex flex-col gap-2 items-stretch uppercase'>
            <h4 className={headerStyle}>projects</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col  ${itemStyle}`}>
            <a href='/hotel'>hotel </a>
            <a href='/office'>office</a>
            <a href='/education'>education</a>
            <a href='/airport'>airport</a>
            <a href='/mall-stadium'>malls and stadium</a>
            <a href='/healthcare'> healthcare</a>
            
            
            </div>

        </div>
        <div className=' max-w-max flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>COMPANY</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col ${itemStyle}`}>
            <a href='/contact'>CAREER</a>
            <a href='/about'>ABOUT US</a>
            <a>FAQ'S</a>
            </div>
           
      
          

        </div>
        <div className=' max-w-max flex flex-col gap-2 justify-start items-stretch justify-items-stretch'>
           <button className={buttonStyle}> <a href='/requestaproposal'>REQUEST A PROPOSAL</a></button>
<button className={buttonStyle}><a className=' text-sm' href='/contact'>CONTACT</a></button>
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