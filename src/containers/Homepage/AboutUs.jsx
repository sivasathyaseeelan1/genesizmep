import React from 'react'
import {motion} from "framer-motion";
const AboutUs = () => {
  return (
    <motion.div className=' text-left  flex gap-4 flex-col md:grid md:grid-cols-2 py-20 mb-4'
    initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition = {{duration:0.6}}
        variants={{
          hidden:{opacity:0,x:-50},
          visible:{opacity:1,x:0}
          }}
    
    >
    <div className='mx-10'>
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7'><h2>About us</h2></div>
    <div className='text-lg ss:text-xl  mb-7 text-textGrey'><p>We are one of the franchise construction industry's fastest growing MEP design firms. 
    We have worked and completed over multiple projects in a variety of industries. We take pride in providing quick turnaround while remaining cost effective. We work all over India for all MEP needs!</p></div>
    </div>
    <div>
      <img src='public/assets/homepage/about_us_image.webp'></img>
    </div>
   
    </motion.div>
  )
}

export default AboutUs