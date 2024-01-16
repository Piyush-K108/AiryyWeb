import React, { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
const Theme = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialRenderComplete, setIsInitialRenderComplete] = useState(false);

  useEffect(() => {
    
    const isDarkMode =
      localStorage.theme === "dark" ||
      (localStorage.theme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsLightMode(!isDarkMode);

    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", !isDarkMode);

    // If the theme is explicitly set in local storage, make sure to update it
    if (localStorage.theme) {
      localStorage.theme = isDarkMode ? "dark" : "light";
    }

    // Mark the initial render as complete
    setIsInitialRenderComplete(true);


  }, []);

  const scrollToSection = (sectionId) => {
    const scrollPosition = window.scrollY;

    console.log(scrollPosition);

  };

  const toggleTheme = () => {
    const newTheme = isLightMode ? "dark" : "light";
    localStorage.theme = newTheme;
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("dark", !isLightMode);
  };

  return (
    <>
      <div
        className={`fixed z-[1001]  flex justify-end items-center h-full cursor-pointer right-0 md:-mr-9 xl:-mr-1  bg-transparent`}
      >
        {isInitialRenderComplete &&
          isLightMode !== undefined &&
          (isLightMode ? (
            <FaSun
              onClick={toggleTheme}
              style={{ height: "50px" }}
              className={`xl:mx-5 text-[#FDB813] sm:mr-10`}
            />
          ) : (
            <FaMoon
              onClick={toggleTheme}
              style={{ height: "50px" }}
              className={`xl:mx-5 text-black sm:mr-10`}
            />
          ))}
        <a
          onClick={() => {
            scrollToSection("Nav");
          }}
          className={`fixed z-[1001] text-white border ${window.scrollY ? "hidden":""} bg-yellow-500 rounded-[50%]  flex justify-end items-end h-[3.4rem] w-[3.4rem] cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-10  bg-transparent`}
        >
          <BsArrowUp
            onClick={() => scrollToSection("Nav")}
            style={{ height: "28px", width: "30px" }}
            className={`   animate-icon mr-[0.7rem] mb-3 inset-0 text-white z-10 xs:mr-[1.2rem]`}
          />

          <span
        
            style={{ height: `100%` }}
            className={`absolute inset-0 border-[3px] border-black border-t-[40px]  rounded-[50%]`}
          ></span>
        </a>
      </div>
    </>
  );
};

export default Theme;
