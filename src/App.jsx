import React from 'react'
import Homepage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OtherPages from './pages/OtherPages';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './containers/Homepage/Footer';
import ContactPage from './pages/ContactPage';

const App = () => {
  
  const landingData = [{name:"MECHANICAL - HVAC ENGINEERING SERVICES",
  details:"Nearby Engineers prepares custom HVAC system solutions tailored to your needs, maximizing energy efficiency and minimizing construction cost"},
{
    name:"ELECTRICAL ENGINEERING SERVICES",
    details:"Today's buildings have more electrical components than ever. From low to high voltage building systems, normal and emergency power, we have your solution."
},
{
    name:"PLUMBING ENGINEERING & DESIGN SERVICES",
    details:"Our speciality plumbing solutions are designed with efficiency, functionality, and longevity in mind.",
},
{
    name:"FIRE PROTECTION ENGINEERING SERVICES",
    details:"In high-rise New York buildings, fire can do a lot of damage - fast. Our systems call the fire department at first sign of smoke to help keep you and your building safe."
}

]
  
  
  return (
    <div>
         <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Homepage></Homepage>}
        ></Route>
       
        <Route
          path='/hvac'
          element={<OtherPages data={landingData[0]}></OtherPages>}
        ></Route>
        <Route path='/electrical' element={<OtherPages data={landingData[1]}></OtherPages>}></Route>
        <Route path='/plumbing' element={<OtherPages data={landingData[2]}></OtherPages>}></Route>
        <Route path='/fireprotection' element={<OtherPages data={landingData[3]}></OtherPages>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App