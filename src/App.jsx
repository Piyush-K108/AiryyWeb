import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import SmoothScroll from "smooth-scroll";
import './App.css';

const ScrollProgress = () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  
  const calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', calcScrollValue);
    return () => {
      window.removeEventListener('scroll', calcScrollValue);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="progress" onClick={scrollToTop}>
      <span id="progress-value">&#x1F815;</span>
    </div>
  );
};


const App = () => {

  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Bikes />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;




















// https://www.minimal.gallery
// https://www.darkmodedesign.com/
// https://www.awwwards.com/
// https://refero.design/
// https://stacksorted.com/