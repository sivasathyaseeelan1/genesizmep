import React from 'react'
import SimpleMap from '../../components/contactPage/MapCard'

const FifthPage = () => {
  return (
    <div className=' pt-12'>
        <div className=' mx-5 flex flex-col md:flex-row gap-3 justify-center'>
        <SimpleMap></SimpleMap>
        <SimpleMap></SimpleMap>
        <SimpleMap></SimpleMap>
        </div>
        {/* <div>
            <img></img>
        </div> */}
    </div>
  )
}

export default FifthPage