import React from 'react'
import SimpleMap from '../../components/contactPage/MapCard';

const LastPage = () => {
  return (
    <div className=' pt-5'>
        <div className=' flex flex-col md:grid grid-cols-3 gap-5 gap-x-5 justify-items-center items-center justify-center'>
        <SimpleMap></SimpleMap>
        <SimpleMap></SimpleMap>
        <SimpleMap></SimpleMap>
        </div>
        <img src='public/assets/contactPage/bottom_bg.png'></img>
    </div>
  )
}

export default LastPage