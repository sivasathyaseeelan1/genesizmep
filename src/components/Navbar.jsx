import React,{useState} from 'react'
import useMediaQuery from '../hooks/UseMediaquery';
import {Plus} from '@styled-icons/bootstrap';
import { Close,Menu, } from '@styled-icons/material';
import Dropdown from './Dropdown';
import {ChevronDown,ChevronRight} from '@styled-icons/bootstrap';
import data from './Navbardata';

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1050px)");
  
  const EngDrop = ["engineering","engineering","engineering","engineering",]

  return (
    <div>

    
    <div className='bg-black text-white flex md:justify-evenly justify-between items-center  min-h-max py-5 w-full px-3  z-1000'>
        <div className=' max-w-[280px]'>
         <a><h1 className='text-lg ss:text-2xl'>Nearby engineers</h1> </a>
         {/* <img src='public/assets/homepage/New-NY-Logos-03.webp'></img> */}
        </div>
        {
          isAboveMediumScreen? (<div className='flex gap-7 items-center text-xl font'>
            
            <div className='group/item1'><a >Engineering <ChevronDown size={12}></ChevronDown></a>
            <div className=' group-hover/item1:scale-100 scale-0 p-5 min-w-[200px] items-center bg-white absolute'>
        {
          
          EngDrop.map((item)=><a className='hover:text-textOrange text-black flex justify-between z-2000 '><p>{item} </p>  <ChevronRight size={20}></ChevronRight></a>)
        }
        </div>
            </div>
            <div><a>Projects</a></div>
            <div><a>On Demand</a></div>
            <div><a>Resources</a></div>
            <div><a>About us</a></div>
            <div><a>contact</a></div>
            <div className='rounded-3xl  py-1 hover:bg-textOrange cursor-pointer px-3  border-solid border-[2px] border-textOrange '><a>request a proposal</a></div>
        </div>): (<>
          {
            isMenuOpen ? <Close onClick={()=>setIsMenuOpen(false)} size={30} className="transition duration-1000"></Close> : <Menu onClick={()=>setIsMenuOpen(true)} size={30} className=" hover:scale-100 transition-all duration-1000"></Menu>

          }
          
          
        </>)
        }
        
        
    
    
    </div>

        {
          isMenuOpen && !isAboveMediumScreen && (
            <div className={` w-full bg-black text-white text-lg ss:text-xl transition duration-10000 ${(isMenuOpen)? "scale-100":"scale-0"} transition-all duration-300 ease-in `}>
            {
              data.map((item)=><Dropdown item={item}></Dropdown>)
            }
            
            </div>
          )
        }
       
        


    </div>
  )
}

export default Navbar