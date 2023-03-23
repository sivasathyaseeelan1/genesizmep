import React from 'react'
import LandingPage from './containers/Homepage/LandingPage'
import AboutUs from './containers/Homepage/AboutUs'
import ClientPage from './containers/Homepage/ClientPage'
import Navbar from './components/Navbar'
import Industries from './containers/Homepage/Industries'
import Working from './containers/Homepage/Working'
import OnDemandEng from './containers/Homepage/OnDemanEng'
import Contact from './containers/Homepage/Contact'
import Footer from './containers/Homepage/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <AboutUs></AboutUs>
      <ClientPage></ClientPage>
      <Industries></Industries>
      <Working></Working>
      <OnDemandEng></OnDemandEng>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default App