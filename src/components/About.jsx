import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div
        id="NewRootRoot"
        className="flex flex-row w-full  xs:hidden     items-start"
      >
        <div
          id="About"
          className="overflow-hidden   relative flex flex-row w-full font-poppins snap-center  snap-mandatory items-start pt-[0px] px-[209px]"
        >
          <div
            id="Ellipse"
            className="w-4/6 h-[870px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] opacity-60 bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute  left-[-84px] flex flex-col gap-24 items-start top-[2.2rem] rounded-[50%]"
          ></div>
          <div
            id="Ellipse1"
            className="w-[45rem] h-[1017px] bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[7.6rem] left-[866px] flex flex-row justify-end items-start pt-[153px] px-12 rounded-[50%]"
          >
            <Fade right>
              <img
                className="-mt-44"
                src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
                alt="Vecteezypeopleworkingandmeetingillustration"
              />
            </Fade>
          </div>
          <Fade left>
            <div className="text-justify text-xl font-poppins leading-[23px] dark:text-white relative w-2/5 mt-40 mb-[213px]">
              <div className="text-3xl mb-2 font-poppins font-semibold leading-[36px] dark:text-gray-300 w-1/1">
                ABOUT US
              </div>
              <div className="text-2xl font-medium font-poppins leading-[56px] dark:text-gray-300 w-1/1">
          
              </div>
              <p className="leading-[30px] font-light text-gray-100">
                {" "}
                We go beyond just providing bikes, 
                we're dedicated to creating unforgettable experiences. Our
                commitment to sustainable urban mobility fuels our mission
                tooffer a diverse fleet of meticulously maintained bikes,
                ensuring that  AiRYY ride is not only smooth and safe but
                also packed with adventure. Visit us at Bhawarkua, Indore, and
                embark on a journey with AiRYY that transforms your commute into
                a memorable adventure. Get ready to explore the city with ease,
                style, and a touch of excitement.
              </p>

              <br />
            </div>
          </Fade>
        </div>
      </div>


{/* Mobile */}
      <div
        id="About"
        className="overflow-hidden  mt-10  sm:hidden  snap-start snap-mandatory  relative  w-full font-['Inter'] items-start "
      >
        <div className="w-[360px] h-[640px] relative ">
        <div className="w-[560px] h-[340px]  bg-gradient-to-b from-yellow-400 to-black" />
          <img
            className="w-[360px] h-[203px] xs:left-[20px] ss:left-[34px] top-[90px] absolute"
            src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
            alt="Vecteezypeopleworkingandmeetingillustration"
          />
          <Fade left>

          <div className="w-[350px] flex-1 justify-center  ss:w-[404.63px] h-[311px] left-[26px] top-[320px] absolute text-justify text-white text-[12px] font-normal font-['Inter'] leading-[23px]">
          <div className="w-[205px]  text-white text-[34px] font-semibold font-['Inter'] mb-4 leading-none">ABOUT US</div>
          <p>

            We go beyond just providing bike,  
            we're dedicated to creating unforgettable experiences. Our commitment
            to sustainable urban mobility fuels our mission tooffer a diverse
            fleet of meticulously maintained bikes, ensuring that  AiRYY
            ride is not only smooth and safe but also packed with adventure.
            Visit us at Bhawarkua, Indore, and embark on a journey with AiRYY
            that transforms your commute into a memorable adventure. Get ready
            to explore the city with ease, style, and a touch of excitement.
          </p>
            <br />
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
