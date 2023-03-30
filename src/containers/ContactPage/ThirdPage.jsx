import React from 'react'

const ThirdPage = () => {
  return (
    <div className=' flex flex-col md:grid md:grid-cols-2 items-stretch'>
        <img src='public/assets/contactPage/contactP.webp'></img>
        <div className=' font-jost text-2xl text-white bg-black py-7 text-center px-5 flex flex-col gap-4 justify-center'>
            <p>We work to provide you with the best MEP engineering consulting services available. If you have any further inquiries or questions, we are happy to provide you with more information.</p>
            <p>If you're interested in working with us, please submit your resume through the Career Opportunities page. Career applicants submitted here won't be considered.</p>
        </div>
    </div>
  )
}

export default ThirdPage;