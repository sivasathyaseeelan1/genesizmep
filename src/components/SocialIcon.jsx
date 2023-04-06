import React from 'react'
import { Whatsapp,TelephoneFill } from '@styled-icons/bootstrap'

const SocialIcon = () => {
  return (
    <div className=' visible gap-5 sm:hidden fixed top-[70%] left-[75%] flex flex-col z-50'>
        <div className=' p-2 bg-white rounded-full shadow-lg'>
        <a href='https://wa.me/917736188669 '><Whatsapp className=' text-white bg-green-500 rounded-full' size={60}></Whatsapp></a>
        </div>
        
        <div className=' p-3 bg-white rounded-full shadow-lg'>
        <a href='tel:+91-7736188669 '>  <TelephoneFill className=' text-blue-600' size={50}></TelephoneFill> </a>
        </div>
   
   
    </div>
  )
}

export default SocialIcon