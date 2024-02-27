import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      id="Contact"
      className="flex snap-start mt-[9.2rem]  flex-row w-full items-start"
    >
      <div
        id="Desktop"
        className="xs:flex xs:flex-col overflow-hidden relative flex   flex-row w-full font-poppins items-start"
      >
        <div
          id="Ellipse1"
          className="xs:w-[530px]  xs:ml-[-223px] xs:flex xs:flex-col bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col gap-16 w-3/5 h-[1017px] items-start xs:mt-[-163px] mt-[-92px] xs:mb-[-192px]   mb-[-92px] ml-[-163px] pt-56 xs:pb-[229px] pb-[269px]   pl-48 rounded-[50%]"
        >
          <div className="xs:justify-start xs:items-start flex flex-col gap-5 w-3/5 font-poppins items-start mb-1 ml-48 xs:ml-14 xs:w-full">
            <div
              id="GetInTouch"
              className="xs:flex xs:justify-start xs:items-start xs:text-xl text-3xl font-poppins tracking-[6.48] uppercase dark:text-white "
            >
              <p className="xs:ml-2">Get in Touch</p>
            </div>
            <div className="xs:text-[12px] xs:mr-0 xs:px-2  xs:flex xs:justify-start xs:items-start text-justify w-full text-xl font-poppins font-medium  dark:text-[#d3d0d0]">
              <p className="xs:text-justify">
                Have questions or need assistance? We are here to help. Contact
                our friendly team at AiRYY Rides for any inquiries, support or
                partnership opportunities.
              </p>
            </div>
          </div>
          <div className="relative z-[1001] xs:h-20  xs:p-3 xs:top-[-60px] xs:left-[50px] left-48">
            <span className="block font-poppins xs:text-[12px]  sm:text-[18px]  xs:ml-2 dark:text-white font-medium uppercase">
              Click on Map to Reach the Pickup location.
            </span>
            <iframe
              className="xs:w-80 sm:hidden h-40 w-full rounded-[2rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.467957738305!2d75.86182427385859!3d22.687931523086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd038adfe389%3A0x2aa0548bdd308fea!2sAiRYY%20Rides!5e0!3m2!1sen!2sin!4v1704033687769!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
             <iframe
              className="xs:w-80 xs:hidden ss:hidden h-72 w-full rounded-[2rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.467957738305!2d75.86182427385859!3d22.687931523086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd038adfe389%3A0x2aa0548bdd308fea!2sAiRYY%20Rides!5e0!3m2!1sen!2sin!4v1704033687769!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="xs:ml-5 flex dark:text-white  flex-row gap-3 mt-6 ">
              <a href="https://www.linkedin.com/company/airyy-rides/">
                <CiLinkedin className="cursor-pointer xs:text-[20px] text-[35px]" />
              </a>

              <a href="https://www.facebook.com/airyyrides">
                <FaFacebook className="cursor-pointer xs:text-[20px] text-[35px]" />
              </a>

              <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
                <FaInstagram className="cursor-pointer xs:text-[20px] text-[35px]" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="Ellipse"
          className="w-3/4  h-[1091px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-0px] left-[630px] flex flex-col gap-8 items-start pt-60 pb-[476px] px-[337px] rounded-[50%]"
        />

        {/* form */}

        <div className="formContainer  xs:z-[1000] z-[1000] xs:top-[-190px]  top-48 xs:px-20 px-10">
          <motion.div
            className="phoneSvg mt-0 "
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg
              className="xs:h-[280px] xs:w-[280px] h-[450px] w-[450px]"
              viewBox="0 0 32.666 32.666"
            >
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                end={{ pathLength: 0 }}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
              />
            </svg>
          </motion.div>
          <motion.form
            className="-ml-12 xs:w-full xs:flex xs:flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <input
              className="placeholder-black xs:w-[19rem]"
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <input
              className="placeholder-black xs:w-[19rem]"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              className="placeholder-black h-full w-full xs:w-[19rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
              rows={8}
              placeholder="Message"
              name="message"
            />
            <div className="flex xs:w-72 justify-center items-center">
              <span className="bg-gray-900 xs:w-72  w-full py-3 rounded-2xl text-center cursor-pointer uppercase text-yellow-400 font-bold">
                Submit
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
