import React from "react";
import img9 from "../../assets/Rectangle 35.svg";
import img10 from "../../assets/Rectangle 36.svg";
import img11 from "../../assets/Rectangle 37.svg";
import arrow from "../../assets/Group 59.svg";
import frame from "../../assets/Frame 34.svg";
import Trending from "./Trending";
import leftArrow from "../../assets/Frame 58.svg";
import rigthArrow from "../../assets/Group 33.svg";
import icon4 from "../../assets/icon4.svg";
import ellipse from "../../assets/Ellipse 15.svg";
import rating from "../../assets/Group 62.svg";
import grp from "../../assets/Group 60.svg";
import agent from "../../assets/unsplash_7uoMmzPd2JA.svg";
import EllipseShade5 from "../../assets/EllipseShade5.svg";
import EllipseShade6 from "../../assets/EllipseShade6.svg";

function Component4() {
  return (
    <div className="">
      <div className="w-full h-auto bg-violet-900 py-16">
        <div className=" flex items-center justify-center flex-col">
          <p className="w-96 text-center text-white text-xl font-medium font-['Poppins'] uppercase tracking-widest">
            WHAT'S TRENDING
          </p>
          <p className="w-96 text-center text-white text-4xl font-semibold font-['Poppins'] leading-10 mt-3">
            Latest Blogs & Posts
          </p>
        </div>

        <div className="flex items-center justify-center relative mt-6">
          <div className="">
            <Trending day="28" date="Tue" img={img9} />
            <p className="w-80 text-white text-3xl text-left ml-4 font-medium font-['Poppins']">
              Top 10 Home Buying Mistakes to Avoid
            </p>
            <p className="w-80 text-neutral-300 text-base text-left font-normal ml-4 font-['Poppins'] leading-relaxed">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
            </p>
            <img src={frame} className="float-right h-12 w-12 " />
          </div>
          <div className="">
            <Trending day="07" date="Mon" img={img10} />
            <p className="w-80 text-white text-left ml-4 text-3xl font-medium font-['Poppins']">
              How to Stage Your Home for a Quick Sale
            </p>
            <p className="w-80 text-neutral-300 ml-4 text-base text-left font-normal font-['Poppins'] leading-relaxed">
              Nullam odio lacus, dictum quis pretium congue, vehicula venenatis
              nunc.
            </p>
            <img src={frame} className="float-right h-12 w-12" />
          </div>
          <div className="">
            <Trending day="26" date="Wed" img={img11} />
            <p className="w-80 text-white ml-4 text-3xl text-left  font-medium font-['Poppins']">
              5 Tips for First-Time Home Sellers
            </p>
            <p className="w-80 text-neutral-300 text-base text-left ml-4 font-normal font-['Poppins'] leading-relaxed">
              In hac habitasse platea dictumst. Phasellus vel velit vel augue
              maximus.
            </p>
            <img src={frame} className="float-right h-12" />
          </div>
        </div>
        <img src={arrow} className="mx-auto mt-7" />
      </div>

      <div className="px-32">
        <div className="flex justify-between">
          <div className="mt-32  ">
            <p className="text-left w-52 text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest">
              TESTIMONIALS
            </p>
            <p className="w-96 mt-2 text-zinc-800 text-4xl text-left font-semibold font-['Poppins'] leading-10">
              Look What Our Customers Say
            </p>
            <p className="w-96 text-left mt-2 text-zinc-800 text-base font-normal font-['Poppins'] leading-relaxed">
              Fusce venenatis tellus a felis scelerisque, non <br /> pulvinar
              est pellentesque.
            </p>
            <div className="flex gap-5 mt-8">
              <img src={leftArrow} />
              <img src={rigthArrow} />
            </div>
          </div>
          <img src={EllipseShade5} />

          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-3xl mt-32 shadow">
              <div className="px-8">
                <img src={icon4} className="mt-6" />
                <p className="w-96 text-left text-zinc-800 text-xl mt-2 font-medium font-['Poppins']">
                  I highly recommend Jodi J. Appleby. She was attentive to our
                  needs and worked tirelessly to find us the perfect home. We
                  couldn't be happier with our new place!
                </p>
                <div className="">
                  <div className="w-96 h-px border border-neutral-300 mt-3"></div>
                  <div className="flex justify-between">
                    <img src={ellipse} className="mt-2" />
                    <p className="text-zinc-800 text-xl mt-4 font-medium font-['Poppins']">
                      Barbara D. Smith
                    </p>
                    <img src={rating} className="" />
                  </div>
                </div>
              </div>
            </div>
            <img src={grp} className=" ml-4 mt-32" />
          </div>
        </div>
        <img src={EllipseShade6} />

        <div className="w-auto mt-32 h-72 bg-violet-900 px-12 rounded-3xl">
          <div className="flex justify-between items-center">
            <img src={agent} className="mb-40 absolute h-[335px] " />
            <div className="py-44 ml-[410px] mb-10  mt-[-80px] ">
              <p className="text-white text-4xl font-semibold font-['Poppins'] leading-10">
                Become a Agent.
              </p>
              <p className="w-80 text-white text-base font-normal font-['Poppins'] leading-relaxed ">
                Fusce venenatis tellus a felis scelerisque. venenatis tellus a
                felis scelerisque.
              </p>
            </div>
            <div className="w-40 h-12 px-7 py-5 mt-[-124px] bg-white rounded-3xl border border-violet-900 justify-start items-center gap-2.5 inline-flex mr-24">
              <div className="text-center text-violet-900 text-base font-medium font-['Poppins']">
                Register Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
