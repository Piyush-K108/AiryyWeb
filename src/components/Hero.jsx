import React from "react";
import ImageCarousel from "./ImageCoursel";
import { frame, motion } from "framer-motion";

const Hero = () => {

  const whatsappNumber = "8109475317"; // Replace with your actual WhatsApp number

  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };
  return (
    <div id="Hero" className="h-screen relative">
      {/* Mobile */}

      <div className="absolute sm:hidden   left-[20px] sm:left-[55px]">
        <div className="relative z-10 top-[260px] ">
          <motion.span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-poppins uppercase leading-[48px] tracking-[2.88px]">
          AiRYY Rides
          </motion.span>

          <motion.span className="text-yellow-400 text-opacity-80 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-poppins uppercase leading-[48px] tracking-[2.88px]">
            !<br />
          </motion.span>
          <motion.span className="dark:text-white xs:text-2xl ss:text-3xl sm:text-4xl  font-medium font-poppins uppercase leading-[48px] tracking-widest">
          Rent, Return, Repeat
          </motion.span>
          <motion.span className="text-white text-[45px] font-medium font-['Fredoka'] capitalize leading-[48px] tracking-[5.40px]">
            .
          </motion.span>
        </div>

        <div className=" max-w-1 cursor-pointer sm:hidden relative top-[280px] z-full  z-10">
          <div className="w-[145px] h-[38px] px-4 py-5 dark:bg-white bg-black rounded-md justify-center items-center gap-3.5 inline-flex">
            <a onClick={handleRentNowClick} className="dark:text-black text-white text-sm font-semibold font-poppins leading-[18px]">
              Contact Now 
            </a>
          </div>
        </div>
      </div>

      {/* Screen */}
      <div className=" xs:hidden ss:hidden h-[135px] left-[46px]  lg:left-[90px]  top-[344px] lg:top-[154px] z-20 absolute">
        <div className="w-[483.30px] text-yellow-500 left-0 top-0 absolute text-[54px] font-medium font-poppins uppercase tracking-[6.48px]">
          AiRYY Rides!
        </div>
        <div className="w-[565px] dark:text-white left-0 top-[112px] absolute text-[37px] font-medium font-poppins uppercase leading-[23px] tracking-[4.44px]">
          Rent, Return, Repeat.
        </div>
      </div>

      <div className="xs:hidden ss:hidden w-[595px] h-[49px] left-[46px]  md:left-[45px]  lg:left-[90px] top-[539px] lg:top-[339px] z-20 absolute dark:text-white text-[19px] font-semibold font-poppins leading-[18px]">
        Your journey, your vehicle – experience travel like never before.
        <br />
      </div>
      <div className="xs:hidden cursor-pointer ss:hidden px-4 py-2.5  left-[46px]  md:left-[45px]  lg:left-[90px] top-[627px] lg:top-[427px] absolute z-20 rounded-[10px] border-2 border-yellow-500 justify-start items-start gap-2 inline-flex">
        <a
          onClick={handleRentNowClick}
          className="text-yellow-400 text-[15px] font-semibold font-['Inter'] leading-[18px]"
        >
          Rent Now
        </a>
      </div>

      {/* Image and gradient background */}
      <div className="xs:left-[25vw] ss:left-[20vw] sm:left-[20vw]  lg:left-[25vw]  xl:-bottom-[20vh]  -bottom-[60vh] ss:-bottom-[50vh]   relative  sm:-bottom-[48vh] lg:-bottom-[40vh]  xl:left-[30vw]">
        {/* <img
          className="xs:w-[22rem] xs:h-[20rem] ss:w-[22rem] ss:h-[20rem]  sm:w-[1115px] sm:h-[785px]  lg:w-[615px] lg:h-[485px]   z-10" // Increased z-index for the image
          alt="Activas"
          src={Bike1}
          style={{ borderRadius: 9999, position: "absolute" }}
        /> */}
        <ImageCarousel />
       
        <div className=" absolute  lg:top-8 lg:-left-[25vw]  xl:left-[10vw]   xs:-left-[35vw] xs:-top-[20vh] ss:-left-[20vw] ss:-top-[18vh]  sm:-left-[20vw] sm:-top-[15vh] xl:-top-[28ch]  z-1">
          <div
            className="absolute h-[1000px] xl:h-[1400px] lg:h-[1600px] w-[1450px]  sm:h-[130rem] sm:w-[205rem] bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-[743.5px/595.5px]"
            style={{
              position: "relative",
            }}
          />
          <div className=" absolute  z-100 top-0 bottom-0 -left-20  xs:-left-48" >

           <svg
           
           className="absolute  h-[900px] w-[1450px] " 
          width="316"
          height="269"
          viewBox="0 0 316 269"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="228.5"
            cy="183"
            rx="228.5"
            ry="183"
            fill="url(#paint0_linear_85_169)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_85_169"
              x1="91.2817"
              y1="303.56"
              x2="387.491"
              y2="188.619"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#11100F" stop-opacity="0.3" />
              <stop offset="1" stop-color="#EEC800" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
          </div>
        </div>
      </div>

      {/* Screen Image */}
    </div>
  );
};

export default Hero;
