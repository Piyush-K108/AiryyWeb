import React , {useState} from 'react'
import Img1 from  '../assets/bikeImg5.png'
import Img2 from  '../assets/bikeImg4.png'
import Img3 from  '../assets/bikeImg3.png'
import Img4 from  '../assets/bikeImg2.png'
import Img5 from  '../assets/bikeImg1.png'
import pin from '../assets/Pin.png'
import BG from '../assets/Bgforbikes.jpg'
// import { useState } from 'react'
import Fade from "react-reveal/Fade";
const Bikes = () => {
  const [isHoveredBox1 , setIsHoveredBox1] = useState(false) ;
  const [isHoveredBox2 , setIsHoveredBox2] = useState(false) ;
  const [isHoveredBox3 , setIsHoveredBox3] = useState(false) ;
  const [isHoveredBox4 , setIsHoveredBox4] = useState(false) ;
  const [isHoveredBox5 , setIsHoveredBox5] = useState(false) ;
  return (
    <div className="h-screen xs:py-[15px] xs:w-full  bg-gradient-to-b from-yellow-500 via-black to-yellow-black  rounded-3xl bg-center snap-center xs:snap-start items-center justify-center flex flex-col  xs:m-0 m-10 py-[15px]">
      <h1 className="text-center  xs:w-[300px] xs:text-[18px] font-poppins text-[30px] font-bold text-black bg-yellow-400 w-[600px]  rounded-2xl py-2">
        The Benefits of Riding with Us
      </h1>
      <div
        id="Bikes"
        className="grid xs:grid-cols-2  xl:w-screen xl:ml-48 grid-cols-3 gap-20 xs:gap-10 xs:m-[5px]   py-16 "
      >
        <div
          class="relative  bg-gradient-to-r from-yellow-500 to-yellow-300   border  border-black shadow-2xl rounded-2xl xs:w-[150px] xs:h-[180px] w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox1(true)}
          onMouseLeave={() => setIsHoveredBox1(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px]   left-[-20px] h-[60px] w-[60px]"
          />
          {/* <div class="absolute w-[135.69px] h-[63.06px]  left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div> */}
          {/* <div class="absolute w-[135.69px] h-[63.06px]  left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox1 ? (
              <Fade bottom>
                <div className="absolute top-[-40px] xs:left-[-100px] left-[-70px]">
                  <p className=" text-start xs:text-[12px] xs:w-[120px] w-[170px] text-black font-poppins font-semibold">
                    "Our Electric Bikes boost a 50 km range, ideal for
                    economical short rides."
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px] absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute xs:top-[-60px]  xs:left-[-80px] top-[-40px] left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img1}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>

        {/* BOX 2 */}
        <div
          class="relative   border bg-gradient-to-r from-yellow-500 to-yellow-300  xs:w-[150px] xs:h-[180px]  border-black shadow-2xl rounded-2xl w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox2(true)}
          onMouseLeave={() => setIsHoveredBox2(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
          />

          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div>
          <div class="absolute w-[135.69px] h-[63.06px] left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox2 ? (
              <Fade bottom>
                <div className="absolute top-[-60px] xs:left-[-100px] left-[-70px]">
                  <p className=" text-start xs:w-[120px] w-[170px] xs:text-[12px] text-black font-poppins font-semibold">
                    "Both Electric Bikes and Activa are new, serviced, and
                    feature advanced safety for a secure riding experience."
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px] absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute top-[-40px]  xs:left-[-80px]  left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img2}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>

        {/* BOX 3 */}
        <div
          class="relative  bg-gradient-to-r from-yellow-500 to-yellow-300  xs:w-[150px] xs:h-[180px]   border  border-black shadow-2xl rounded-2xl w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox3(true)}
          onMouseLeave={() => setIsHoveredBox3(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
          />
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div> */}
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox3 ? (
              <Fade bottom>
                <div className="absolute top-[-40px] xs:left-[-105px] left-[-70px]">
                  <p className=" text-start xs:w-[140px] w-[170px] xs:text-[12px]  text-black font-poppins font-semibold">
                    "Enjoy environmentally friendly rides, reducing emissions
                    with our Electric Bikes."
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px] absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute top-[-40px] xs:left-[-80px] left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img3}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>

        {/* BOX 4 */}
        <div
          class="relative   border bg-gradient-to-r from-yellow-500 to-yellow-300  xs:w-[150px] xs:h-[180px] border-black shadow-2xl  rounded-2xl w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox4(true)}
          onMouseLeave={() => setIsHoveredBox4(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
          />
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div> */}
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox4 ? (
              <Fade bottom>
                <div className="absolute top-[-60px] xs:left-[-110px] left-[-70px]">
                  <p className="text-start xs:text-[12px] xs:w-[140px] w-[195px] text-black font-poppins font-semibold">
                    "Our fleet, including Activa, is new, meticulously
                    serviced,and promises a fresh and comfortable ride."
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px] absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute top-[-40px] xs:left-[-80px] left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img4}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>

        {/* BOX 5 */}
        <div
          class="relative bg-gradient-to-r from-yellow-500 to-yellow-300   xs:w-[150px] xs:h-[180px]  border  border-black shadow-2xl rounded-2xl w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox5(true)}
          onMouseLeave={() => setIsHoveredBox5(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
          />
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div> */}
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox5 ? (
              <Fade bottom>
                <div className="absolute top-[-60px] xs:left-[-105px] left-[-80px]">
                  <p className=" text-start xs:text-[12px] xs:w-[140px] w-[210px] text-black font-poppins font-semibold">
                    Choose between the silent efficiency of Electric Bikes or
                    the versatile reliability of Activa, meeting diverse rider
                    preferences.
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px] absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute top-[-40px] xs:left-[-80px] left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img5}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>

        {/* BOX 6 */}
        <div
          class="relative bg-gradient-to-r from-yellow-500 to-yellow-300   xs:w-[150px] xs:h-[180px]    border  border-black shadow-2xl  rounded-2xl w-[251px] h-[209px]"
          onMouseEnter={() => setIsHoveredBox5(true)}
          onMouseLeave={() => setIsHoveredBox5(false)}
        >
          <img
            src={pin}
            alt="pin img"
            className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
          />
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[-50.07px] top-[7.06px] rotate-[-37.07deg] bg-zinc-800"></div> */}
          {/* <div class="absolute w-[135.69px] h-[63.06px] left-[152.62px] top-[150.83px] rotate-[139.15deg] bg-zinc-800"></div> */}
          <div class="flex items-center justify-center absolute w-[134px] h-[124px] left-[118px] top-[113px]">
            {/* <img
            class="absolute w-[78px] h-[78px] left-[28px] top-[17px]"
            src="https://via.placeholder.com/78x78"
            alt="Placeholder Image 1"
          /> */}
            {isHoveredBox5 ? (
              <Fade bottom>
                <div className="absolute top-[-40px] xs:left-[-100px] left-[-70px]">
                  <p className=" text-start xs:text-[12px] xs:w-[110px] w-[170px] text-black font-poppins font-bold">
                    Our Electric Bikes boast a 50 km range, ideal for economical
                    short rides .
                  </p>
                </div>
              </Fade>
            ) : (
              <div>
                <p className="xxl:hidden xl:hidden xs:left-[-60px]  absolute top-[-90px] left-[-0px]">
                  Click me
                </p>
                <img
                  className="absolute  xs:left-[-80px] top-[-40px] left-[-20px] right-[30px] w-[70px] h-[70px]"
                  src={Img5}
                  alt="Placeholder Image 2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bikes