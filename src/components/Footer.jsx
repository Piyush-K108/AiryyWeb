import React from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import Logo from "../assets/logo.png";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="snap-end">
      {/* Existing footer content */}
      <div id="Footer" className="w-full pb-20 h-3/4 xs:h-full xs:mb-20 ">
        <div className="md:flex-row sm:flex-col ss:flex-col xs:flex-col flex items-center justify-around ">
          <div className="xs:flex xs:flex-col xs:-mb-40  xs:ml-20 ">
            <div className=" xs:mt-20 xs:w-screen xs:justify-start xs:items-center ">
              <a
                className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                onClick={() => scrollToSection("Nav")}
              >
                <img
                  className="w-44 ml-6 bg-blend-color bg-no-repeat "
                  src={Logo}
                  alt=""
                />
              </a>
              <h2 className="dark:text-gray-300 ml-6 font-poppins mt-1 xs:mt-2 xs:text-[18px] text-[25px] font-medium">
                Rent it now!
              </h2>
            </div>
            <div className="xs:mr-10 xs:w-screen xs:flex xs:justify-start xs:items-center">
              <p className="dark:text-gray-300 ml-6 ss:text-[20px] ss:text-center font-poppins mt-1 xs:hidden xs:text-[18px] text-[25px]">
                Explore the city with ease. Rent a bike today!
              </p>
            </div>
          </div>
          <Zoom right>  
            <img
              src={FooterImg}
              alt="Footer Img"
              className="rounded-2xl lg:pl-40 xs:-mb-20 xs:ml-40"
              height={400}
              width={450}
            />
          </Zoom>
        </div>

        <div className="flex flex-row xs:flex-col ss:ml-0 ss:px-4 xs:px-8 xs:py-3 justify-around items-center xs:ml-4 py-4">
          {/* Contact information */}
          <div className="flex flex-col -mb-4 dark:text-white">
            <h1 className="font-bold font-poppins pb-2 ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
              Contact Us
            </h1>

            <ul className="flex flex-col mt-2 -ml-2 -mr-4 gap-4 ">
              <li className="dark:text-white">
                <PhoneInTalkOutlinedIcon className="text-yellow-400" />{" "}
                <a href="tel:9826977757">9826977757</a>
              </li>
              <li className="dark:text-white">
                <AttachEmailOutlinedIcon className="text-yellow-400" />{" "}
                <a href="mailto:airyyrides@gmail.com">airyyrides@gmail.com</a>
              </li>
              <li className="dark:text-white">
                <div className="flex flex-row gap-1">
                  <PlaceOutlinedIcon className="text-yellow-400" />{" "}
                  <a
                    href="https://www.google.com/maps/place/AiRYY+Rides/@22.6881198,75.8581969,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd038adfe389:0x2aa0548bdd308fea!8m2!3d22.6881149!4d75.8630678!16s%2Fg%2F11stj9kj6g?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    160/4, Bholaram Ustad Marg, Indrapuri Colony, Bhanwar Kuwa,
                    Indore, Madhya Pradesh 452001
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* Useful Links */}
          <div className="dark:text-white xs:hidden ss:hidden">
            <h1 className="font-bold font-poppins pb-2 ss:text-[14px] xs:text-[25px] text-[25px]">
              Useful Links
            </h1>
            <ul className="flex flex-col  gap-3">
              <li className="hover:underline cursor-pointer  xs:text-[13px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                Terms and Conditions
              </li>
            </ul>
          </div>

          {/* Social Links for larger screens */}
        </div>

        {/* Useful Links for smaller screens with image */}
        <div className="flex flex-row  sm:hidden">
          <div className="dark:text-white flex flex-col w-screen ml-[2.8rem] mt-14 justify-start">
            <h1 className="font-bold font-poppins pb-2 ss:text-[14px] xs:text-[20px] text-[25px]">
              Useful Links
            </h1>
            <ul className="xs:flex xs:flex-col  xs:gap-4">
              <li className="hover:underline cursor-pointer xs:text-[17px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[17px]">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div className="flex  dark:text-white flex-col gap-4 h-[11rem] mr-10 pt-8">
            <div className="border-y-2 mt-4 border-yellow-400 " />
            <a href="https://www.linkedin.com/company/airyy-rides/">
              <CiLinkedin className="cursor-pointer" size={28} />
            </a>
            <a href="https://www.facebook.com/airyyrides">
              <FaFacebook className="cursor-pointer mt-[0.06rem]" size={24} />
            </a>
            <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
              <FaInstagram className="cursor-pointer mt-[0.06rem]" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic date and website URL */}
      <div className="w-screen  justify-between flex xs:hidden  ss:hidden px-44 text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
        <div className="flex xs:hidden  ss:hidden dark:text-white  flex-row gap-4 h-[5rem] ">
          <a href="https://www.linkedin.com/company/airyy-rides/">
            <CiLinkedin className="cursor-pointer" size={33} />
          </a>
          <a href="https://www.facebook.com/airyyrides">
            <FaFacebook className="cursor-pointer mt-[0.06rem]" size={28} />
          </a>
          <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
            <FaInstagram className="cursor-pointer mt-[0.06rem]" size={28} />
          </a>
        </div>
      </div>

      <div className="w-screen -mt-10 justify-center pb-20 flex sm:hidden  text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
      </div>
    </div>
  );
}

export default Footer;
