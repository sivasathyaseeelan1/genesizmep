import React from 'react'
import Card from '../../components/OtherPages/Card'

const FifthPage = () => {
  const data = [
  {num:"50",title:"States",content:"We are licensed in all 50 states!"},
  {num:"0",title:"Errors",content:"Assess the load of the equipment accurately"},
  {num:"1000+",title:"Projects",content:"We have completed so far!"},
  {num:"90+",title:"Brands",content:"We work with the biggest names in the Franchise industry"},
  {num:"5",title:"Days",content:"Enjoy our lightening fast turnaround"},
  {num:"$750",title:"Cost Eff",content:"Very budget friendly & cost effective"},

]
  
  
    return (
    <div className=' bg-bgOrange px-10 py-20 '>

<h3 className=' text-5xl font-semibold font-jost mb-10 text-center text-white'>We can give you 1000 reasons to work with us,
let's start with 6</h3>
    
    <div className=' bg-bgOrange flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-3 md:gap-y-3 '>
        
      
        {
            data.map((item)=><Card props={item} ></Card>)
        }
    </div>
    </div>
  )
}

export default FifthPage