import React, { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const Theme = () => {
  useEffect(() => {
    // Always set the theme to dark during initialization
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
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
