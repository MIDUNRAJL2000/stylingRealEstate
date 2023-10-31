import React from "react";
import img1 from "../../assets/Carousal.svg";
import logo7 from "../../assets/logo7.svg";
import logo8 from "../../assets/logo8.svg";
import logo9 from "../../assets/logo9.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import image6 from "../../assets/image6.svg";
import logo10 from "../../assets/logo10.svg";
import logo11 from "../../assets/logo11.svg";
import Rectangle14 from "../../assets/Rectangle 14.png";
import Rectangle15 from "../../assets/Rectangle 15.png";
import Rectangle16 from "../../assets/Rectangle 16.png";
import Group21 from "../../assets/Group 21.svg";
import Group45 from "../../assets/Group 45.svg";
import EllipseShade from "../../assets/EllipseShade.svg";
import EllipseShade2 from "../../assets/EllipseShade2.svg";
import group4 from "../../assets/Group(4).svg";

function Hero() {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-sky-100 to-blue-200 rounded-bl-full rounded-br-full ">
        <div className="w-full text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest px-52 flex items-start pt-12 mt-8">
          REAL ESTATE
        </div>
        <div className="flex justify justify-between w-full px-52 pt-4">
          <div className="flex flex-col gap-4">
            <div className="text-neutral-950 text-6xl font-semibold self-center font-['Poppins'] w-full flex items-start text-left">
              Find a perfect <br />
              home you love..!
            </div>
            <div className="w-full text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed text-left pr-6">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.{" "}
              <br />
              Integer a dolor eu sapien sodales vulputate ac in purus.
              <img
                src={EllipseShade}
                className="absolute left-auto right-[740px]"
              />
              <div className="w-full h-80 relative mr-7">
                <img
                  className="w-full h-80 left-0 top-0 absolute rounded-2xl"
                  src={img1}
                />
              </div>
            </div>
          </div>

          <div className="w-96 bg-white rounded-3xl shadow h-auto mb-32 mt-4">
            <div className="bg-white rounded-tl-2xl rounded-tr-2xl border-b border-neutral-400">
              <div className="flex justify-between items-center px-8">
                <span className="text-violet-900 text-base font-medium font-['Poppins'] border-b-2 border-blue-600 py-5 px-10">
                  For Sale
                </span>
                <span className="text-center text-zinc-500 text-base font-medium font-['Poppins'] py-5 px-10">
                  For Rent
                </span>
              </div>
            </div>
            <div className="px-8 flex flex-col gap-6 py-6">
              <div className="w-full p-4 text-start bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                  New York, San Francisco, etc
                </span>
              </div>
              <div className=" p-4 bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <div className="flex justify-between px-2">
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                    Select Property Type
                  </span>
                  <img src={logo7} />
                </div>
              </div>
              <div className="w-full p-4 bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <div className="flex justify-between px-2">
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                    Select Rooms
                  </span>
                  <img src={logo7} />
                </div>
              </div>
              <div className="flex gap-2">
                <img src={logo8} />
                <p className="text-right text-violet-900 text-sm font-normal font-['Poppins'] leading-snug">
                  Advance Search
                </p>
              </div>
              <div className="w-80 p-5  self-center bg-violet-900 rounded-3xl border border-stone-300">
                <div className="flex items-center gap-3 justify-center">
                  <img src={logo9} />
                  <span className="text-center text-white text-base font-medium font-['Poppins']">
                    Search
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex p-10 items-center justify-center mt-[-100px] gap-5 ">
          <div className="w-96 h-24 bg-white rounded-full shadow p-6 mr-4">
            <img src={Group21} />
          </div>

          <div className="w-80 h-24 bg-white rounded-full shadow p-6">
            <img src={Group45} />
          </div>
        </div>
        <img
          src={EllipseShade2}
          className="w-24 h-24 absolute left-[150px] bottom-[-280px]"
        />
        <p className="text-center text-zinc-500 text-base font-medium font-['Poppins'] mt-12">
          Trusted by 100+ Companies across the globe!
        </p>
        <div className="flex justify-evenly mt-24">
          <img src={image1} className="w-28 h-10 mix-blend-luminosity" />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
        </div>
      </div>

      <div className="  flex mt-40 px-44">
        <div className="">
          <p className="w-52 text-left text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest">
            WHO ARE WE
          </p>
          <img
            src={group4}
            className="absolute left-[830px] bottom-[-700px] w-[206px] h-[205.95px]"
          />
          <p className="w-96 mt-2.5 text-left text-zinc-800 text-3xl font-semibold font-['Poppins'] leading-10">
            Assisting individuals in locating the appropriate real estate.
          </p>

          <p className="w-96 mt-2 text-zinc-500 text-base font-normal font-['Poppins'] text-left leading-relaxed">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
          <div className="w-96 mt-8 h-auto bg-white rounded-3xl shadow">
            <div className="flex">
              <div className="flex items-center">
                <img
                  src={logo10}
                  className="ml-5 h-10 w-10 items-center flex"
                />
              </div>
              <div className="">
                <p className="w-72 text-blue-600 text-xl font-medium font-['Poppins']">
                  Donec porttitor euismod
                </p>
                <p className="w-72 text-zinc-500 ml-0.5 text-base font-normal font-['Poppins'] leading-relaxed">
                  Nullam a lacinia ipsum, nec <br /> dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 h-auto bg-white rounded-3xl mt-4 shadow">
            <div className="flex">
              <div className="flex items-center">
                <img src={logo11} className=" ml-5 h-10 w-10" />
              </div>
              <div className="">
                <p className="w-auto text-blue-600 text-xl font-medium font-['Poppins']">
                  Donec porttitor euismod
                </p>
                <p className="w-72 pl-0.5 text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
                  Nullam a lacinia ipsum, nec <br />
                  dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            src={Rectangle14}
            className=" w-72 h-[430px] rounded-3xl mt-20 ml-24"
          />
        </div>
        <div className="flex flex-col ml-24">
          <img src={Rectangle15} className="  w-72 h-64 mt-4" />
          <img src={Rectangle16} className=" w-72 h-44 mb-24 mr-32 " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
