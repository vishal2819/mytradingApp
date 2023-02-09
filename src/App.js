import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import BreadCrumb from "./components/BreadCrumb";
import IntradaySection from "./components/IntradaySection";
import Accordian from "./components/Accordian";
import Whatsapp from "./components/Whatsapp";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Herosection />
      <BreadCrumb />  
      <IntradaySection />
      <Testimonial />
      <Accordian />
      <Whatsapp />
      <Footer />
      <ScrollToTop smooth  color="blue"/>
    </>
  );
};

export default App;
