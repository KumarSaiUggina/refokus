import React from "react";
import Navbar from './components/Navbar/Navbar'
import Work from "./components/Work/Work";
import Stripes from "./components/Stripe/Stripes";
import Products from "./components/Product/Products";
import Marquees from "./components/Marquee/Marquees";
import Cards from "./components/Card/Cards";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from 'locomotive-scroll';





function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return <div className="w-full min-h-screen bg-zinc-900 font-['Satoshi Variable'] text-white">
    <Navbar />
    <Work />
    <Stripes/>
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>
  </div>;
}

export default App;
