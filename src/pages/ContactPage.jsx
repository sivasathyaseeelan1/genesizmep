import React from 'react';
import Landing from '../containers/ContactPage/Landing';
import SecondPage from '../containers/ContactPage/secondPage';
import ThirdPage from '../containers/ContactPage/ThirdPage';
import FourthPage from '../containers/ContactPage/FourthPage';

import FifthPage from '../containers/ContactPage/FifthPage';


const ContactPage = () => {
  return (
    <div>
      <Landing></Landing>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
<FourthPage></FourthPage>


{/* <FifthPage></FifthPage> */}

    </div>
  )
}

export default ContactPage