import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/home';
import { Navbar } from './views/Navbar/Navbar';
import { PriceList } from './views/PriceList/PriceList';
import { Gallery } from './views/Gallery/Gallery';
import { AboutMe } from './views/AboutMe/AboutMe';
import { Footer } from './views/Footer/Footer';

function App() {
  return (
    <div className="bg-white w-screen" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<PriceList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App
