import React, { useRef } from "react";
import Slider from "react-slick";

// import BIke1 from "../assets/out-2.png"
import ActivaOne from "../assets/ActivaOne.png";
import ActivaTwo from "../assets/ActivaTwo.png";
import ActivaFour from "../assets/ActivaFour.png";



const ImageCarousel = () => {
  
  const sliderRef = useRef(null);
  const sliderImages = [

    ActivaFour,
    ActivaTwo,
    ActivaOne,
   
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="flex flex-row items-center justify-evenly">
      
      <div className="xs:w-[22rem] xs:h-[20rem] ss:w-[30rem] ss:h-[30rem]  sm:w-[815px] sm:h-[285px]  lg:w-[615px] lg:h-[485px]   z-10" >
        <Slider ref={sliderRef} {...settings}>
          {sliderImages.map((image, index) => (

            <img
            
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              
            />
          ))}
        </Slider>
      </div>

  
    </div>
  );
};

export default ImageCarousel;