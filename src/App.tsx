import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './views/Home/home';
import { Navbar } from './views/Navbar/Navbar';
import { PriceList } from './views/PriceList/PriceList';
import { Gallery } from './views/Gallery/Gallery';
import { AboutMe } from './views/AboutMe/AboutMe';
import { Footer } from './views/Footer/Footer';
import { CustomButton } from './components/Button/CustomButton';
import { Order } from './views/Order/Order';

function App() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/order')
  }

  const uiNavbar = () => {
    if (window.scrollY > 70) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }
  window.addEventListener('scroll', uiNavbar)
  return (
    <div className="w-screen" >
      <Navbar style='w-full' showButton />
      <Navbar style={`fixed -top-1 z-50 bg-opacity-80 w-full duration-1000 -top-20 ${showNavbar ? 'translate-y-20' : ''}`}
        showButton={!showNavbar}
      />
      <CustomButton handleClick={handleBooking} name='BOOK NOW' style={`fixed bottom-20 z-50 border-2 border-[#27374D] -right-48 duration-1000 bg-white ${showNavbar ? '-translate-x-96 hover:scale-105 shadow-lg text-[#27374D]' : ''}`} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<PriceList />} />
        <Route path='/order' element={<Order />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App
