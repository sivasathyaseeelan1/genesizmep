import React,{useState} from 'react'
import { Plus,FileMinus } from '@styled-icons/bootstrap';


const Dropdown = ({item}) => {
  
  const [open,setOpen] = useState(false);
 
  
  return (
  
  
    
    <div>

   
    <div className=' border-dotted border-white border-[1px] items-stretch flex justify-between '>
    <a href={item.url}>{item.name}</a>
    
    {
      item.isdrop?<span className=' border-white border-dotted border-[1px] p-1'>
      {!open?
    <Plus size={30} onClick={()=>setOpen(true)}></Plus>:<FileMinus size={30} onClick={()=>setOpen(false)}></FileMinus>}</span>:<></>
    }

    



    </div>

    {
      open ? item.data.map((item)=><Dropdown item={item}></Dropdown>) :null
    
    }
    


    </div>




  )
}

export default Dropdown