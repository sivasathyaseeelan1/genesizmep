import React from 'react'

const ProjectCard = ({data}) => {
 const tagStyle = " md:text-xl text-sm font-semibold flex-1 "
 const contentStyle="md:text-xl text-lg border-b-2 border-b-solid border-b-white   "
 
  return (
    <div className=' md:mx-20 mx-10'>


 
    <div className=' bg-slate-300 md:mx-5 flex flex-col md:grid md:grid-cols-3 md:items-end items-center justify-items-center  shadow-2xl rounded-tl-3xl rounded-br-3xl '>
    
    <div className=' bg-white col-start-1 col-end-2 h-full w-full  flex flex-col justify-center items-center '>
<h1 className=' font-jost text-4xl font-bold uppercase mb-4'>{data.name}</h1>
  <div className=' w-10 h-[2px] bg-yellow-400 mb-5'></div>
  <img className=' h-[350px]' src={data.img}></img>
</div>
   
<div className=' flex flex-col md:text-right my-auto max-w-full box-border  col-start-2 col-end-4  text-center gap-4 font-jost w-max md:px-10 py-7 justify-center items-center rounded-lg'>
    
        <p className={tagStyle}>Location</p>
        <p className={contentStyle+` `}>{data.location}</p>
        {/* <p className={tagStyle}>Budget</p>
        <p className={contentStyle}>{data.budget}</p>

        <p className={tagStyle}>Project Area</p>
        <p className={contentStyle}>{data.projectArea}</p>
        <p className={tagStyle}>Project Brief</p>
        <p className={contentStyle}>{data.projectBrief}</p> */}

     



    
    </div>
    </div>
    </div>
    
  )
}

export default ProjectCard


