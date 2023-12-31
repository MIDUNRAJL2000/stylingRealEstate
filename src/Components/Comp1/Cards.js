import React from "react";
import frame from "../../assets/Frame 44.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import logo12 from "../../assets/logo12.svg";
import logo13 from "../../assets/logo13.svg";
import logo14 from "../../assets/logo14.svg";

function Cards() {
  return (
    <div>
      <div className="py-20 px-40 ">
        <p className="text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest text-left">
          CHECKOUT OUR NEW
        </p>

        <div className="flex justify-between ">
          <p className="text-zinc-800 text-4xl font-semibold font-['Poppins'] leading-10 mt-4">
            Latest Listed Properties
          </p>
          <div className=" ">
            <div className="w-20 h-12 px-7 py-5  bg-white rounded-3xl border mr-4 border-violet-900 justify-start items-center inline-flex">
              <div className="text-center text-violet-900 text-base font-medium font-['Poppins']">
                All
              </div>
            </div>
            <div className="w-20 h-12 px-7 py-5 bg-violet-900 rounded-3xl justify-start items-center inline-flex mr-4 ">
              <div className="text-center text-white text-base font-medium font-['Poppins']">
                Sell
              </div>
            </div>
            <div className="w-24 h-12 px-7 py-5 bg-white rounded-3xl border border-violet-900 justify-start items-center  inline-flex">
              <div className="text-center text-violet-900 text-base font-medium font-['Poppins']">
                Rent
              </div>
            </div>
          </div>
        </div>
        <p className="w-96 h-9 text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed text-left mt-4">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus.
        </p>
      </div>
      <div className="relative mb-[700px]">
        <img src={frame} className="mt-12 absolute left-[160px] " />
      </div>

      <div className=" bg-neutral-300 w-full h-auto py-24">
        <div className="">
          <p className="text-center text-zinc-800 text-xl font-medium font-['Poppins'] tracking-widest  ">
            OUR SERVICES
          </p>
          <p className="text-center text-neutral-950  text-4xl font-semibold font-['Poppins'] leading-10 mt-8">
            Donec porttitor euismod dignissim
          </p>
        </div>
        <div className="mt-14 gap-10">
          <div className="flex mx-24 justify-between ">
            <div className="w-96 h-auto bg-white rounded-3xl shadow align-center pb-[40px]">
              <div className="w-20 h-20 bg-blue-600 rounded-full shadow mx-auto mt-12">
                <div className="flex justify-center pt-5">
                  <img src={logo12}></img>
                </div>
              </div>
              <p className=" text-xl font-medium font-['Poppins'] mt-4">
                Buy a New Home
              </p>
              <p className="w-[220px] mx-auto text-base text-zinc-500 font-normal font-['Poppins'] leading-relaxed">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>
            <div className=" w-96 h-auto bg-white rounded-3xl shadow align-center ">
              <div className="w-20 h-20 bg-blue-600 rounded-full shadow mx-auto mt-12">
                <div className="flex justify-center pt-4">
                  <img src={logo13}></img>
                </div>
              </div>
              <p className="text-zinc-800 text-xl font-medium font-['Poppins'] mt-4">
                Sell a House
              </p>
              <p className="w-[220px] mx-auto text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>
            <div className="align-cemter w-96 h-auto bg-white rounded-3xl shadow">
              <div className="w-20 h-20 mt-12 bg-blue-600 rounded-full shadow mx-auto">
                <div className="flex justify-center pt-5">
                  <img src={logo14}></img>
                </div>
              </div>
              <p className="text-zinc-800 text-xl font-medium font-['Poppins'] mt-4">
                Rent a House
              </p>
              <p className="w-[220px] text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed mx-auto">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
