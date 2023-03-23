import React from 'react'
import Card from "../../components/IndustriesCard"

const details = [{name:"QSR",img:"Donuts.jpg"},{name:"HEALTHCARE",img:"Hospital.jpg"},{name:"FITNESS",img:"Fitness.jpg"},{name:"PET CARE",img:"Pet.jpg"},{name:"BANKS",img:"Banks.jpg"},{name:"RETAIL",img:"Retail.webp"},]

const Industries = () => {
  return (
    <div>

  <div className='flex flex-col justify-center items-center'>
    <h2 className=' text-2xl ss:text-3xl md:text-5xl mb-7 py-8 text-textOrange'>NY ENGINEERS</h2>
    <p className='text-lg ss:text-xl  mb-6 text-textGrey'>QSR  HEALTHCARE  FITNESS  PET CARE  BANKS  RETAIL</p>
  </div>
    
    <div className='flex flex-col md:grid md:grid-cols-3 md:grid-flow-row mx-10 gap-5 gap-x-4 gap-y-4'>

      {
        details.map((item)=><Card name={item.name} img={item.img}></Card>)
      }
    </div>
    </div>
  )
}

export default Industries