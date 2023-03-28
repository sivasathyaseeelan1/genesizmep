import React from 'react'
import {ArrowDownCircleFill,ChevronDoubleRight,ChevronDoubleDown} from "@styled-icons/bootstrap/";
import { MiscellaneousServices } from '@styled-icons/material';

const Service = ({data}) => {
  const IconStyle = " text-white hover:text-black"
    return (
   <div className=' sm:grid md:grid-cols-4 sm:grid-cols-2 flex flex-col mb-3'>
 <div className=' hover:text-bgOrange2 hover:border-bgOrange2 border-solid border-bgBrown border-[1px]'>
        
        <div className=' relative bottom-[26%] left-[34%] mx-4 bg-bgBrown hover:bg-bgOrange2 z-50  w-14 h-14 flex justify-center items-center'>
        <ArrowDownCircleFill className={IconStyle} size={30} ></ArrowDownCircleFill>
        
        </div>
      
    <a className=' uppercase text-lg font-extrabold' href='#igilijhbik'>most requested services</a>
</div>
 <div className='relative hover:text-bgOrange2 hover:border-bgOrange2 border-solid border-bgBrown border-[1px]'>
        
        <div className=' absolute bottom-4 bg-bgBrown hover:bg-bgOrange2 mx-3'>
        <ChevronDoubleRight className={IconStyle} size={12}></ChevronDoubleRight>
        
        </div>
      
    <a className=' uppercase text-lg font-extrabold' href='#igilijhbik'>system components in our designs </a>
</div>
 <div className='relative hover:text-bgOrange2 hover:border-bgOrange2 border-solid border-bgBrown border-[1px]'>
        
        <div className=' absolute bottom-4 bg-bgBrown hover:bg-bgOrange2 mx-3'>
        <ChevronDoubleDown className={IconStyle} size={12}></ChevronDoubleDown>
        
        </div>
      
    <a className=' uppercase text-lg font-extrabold' href='#igilijhbik'>agencies approvals we secure</a>
</div>
 <div className='relative hover:text-bgOrange2 hover:border-bgOrange2 border-solid border-bgBrown border-[1px]'>
        
        <div className=' absolute bottom-4 bg-bgBrown hover:bg-bgOrange2 mx-3'>
       <MiscellaneousServices className={IconStyle} size={12}></MiscellaneousServices>
        
        </div>
      
    <a className=' uppercase text-lg font-extrabold' href='#igilijhbik'>on demand services</a>
</div>




   </div>
  
  )
}

export default Service