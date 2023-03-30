import React from 'react';
import Landing from '../containers/ContactPage/Landing';
import SecondPage from '../containers/ContactPage/secondPage';
import ThirdPage from '../containers/ContactPage/ThirdPage';
import FourthPage from '../containers/ContactPage/FourthPage';
// import LastPage from '../containers/ContactPage/LastPage';



const ContactPage = () => {
  return (
    <div>
      <Landing></Landing>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
<FourthPage></FourthPage>
{/* <LastPage></LastPage> */}



    </div>
  )
}

export default ContactPage