import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const Theme = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (localStorage.theme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsLightMode(!isDarkMode);

    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", !isDarkMode);

    // If the theme is explicitly set in local storage, make sure to update it
    if (localStorage.theme === undefined) {
      localStorage.theme = isDarkMode ? "dark" : "light";
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
  };

  return (
    <>
      <a
        onClick={() => {
          scrollToSection("Nav");
        }}
        className={`fixed z-[1001] text-white border ${
          window.scrollY ? "" : ""
        } bg-yellow-500 rounded-[50%]  flex justify-end items-end h-[3.4rem] w-[3.4rem] cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-10  bg-transparent`}
      >
        <BsArrowUp
          onClick={() => scrollToSection("Nav")}
          style={{ height: "28px", width: "30px" }}
          className={`animate-icon mr-[0.7rem] mb-3 inset-0 text-white z-10 flex h-full w-full items-center justify-center`}
        />
        <span
          style={{ height: `100%` }}
          className={`absolute inset-0 border-[3px]  border-t-[45-3px]  rounded-[50%]`}
        ></span>
      </a>
    </>
  );
};

export default Theme;
