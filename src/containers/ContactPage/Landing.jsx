import React from 'react'
import Contact from '../Homepage/Contact'

const Landing = () => {
  return (
    <div className='flex flex-col gap-10 md:grid md:grid-cols-2  pt-[75px] md:py-20'>
        <div className=' bg-black py-10 col-start-1 col-end-2 '>
            <div className=' py-4 px-2  bg-textOrange text-white text-center '>
                <h1 className=' font-anton text-6xl mb-4'>OUR CONTACT</h1>
                <p className=' font-jost text-2xl'>We respond on the same day!</p>
            </div>
            <div className=' font-jost text-left flex flex-col gap-4 text-white px-5'>
              <p className=' text-2xl'>55 Broad Street, 4th Floor, New York,NY, 10004</p>
              <h4 className=' text-3xl font-semibold'>212-575-5300</h4>
              <p className=' text-2xl'>info@ny-engineers.com</p>
              <p className=' text-2xl'>www.ny-engineers.com</p>
              <img className=' mx-auto' src='public/assets/contactPage/icon.webp'></img>
            </div>


        </div>

<div>
<div className=' flex flex-col gap-5 uppercase font-jost text-lg text-center'>
<p>we work</p>
<h2 className=' text-5xl'>nationwide</h2>
<p>GET YOUR QUOTE TODAY!</p>
</div>

<Contact > </Contact>



</div>


    </div>
  )
}

export default Landing