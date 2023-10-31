import React from "react";
import Group1 from "../../assets/Group 1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import SocialMediaIcons from "../../assets/SocialMediaIcons.svg";
import Rectangle40 from "../../assets/Rectangle 40.svg";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import Group84 from "../../assets/Group 84.svg";
import arrow from "../../assets/arrow.svg";

function Footer() {
  return (
    <div>
      <div className=" h-[420px] bg-indigo-100 gap-2 flex items-center justify-between text-gray-700 px-32   mt-32 ">
        <div className="flex flex-col gap-18 font-semibold ">
          <div className=" flex flex-col gap-10">
            <img src={Group1} className="w-32 h-12" />
            <p className="w-[188px]">
              2728 Hickory StreetSalt Lake City, UT 84104
            </p>
            <div className="flex flex-col gap-12">
              <div className="flex">
                <img src={phone}></img>
                <p className="ml-2">+1 206-214-2298</p>
              </div>
              <div className="flex">
                <img src={message}></img>
                <p className="ml-2 ">support@rezilla.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 mb-2">
          <h1 className=" font-semibold text-xl">Quick Links</h1>
          <div className=" font-medium flex flex-col gap-2">
            <p>Home</p>
            <p>About</p>
            <p>Listings</p>
            <p>Services</p>
            <p>Blogs</p>
            <p>Become a Agent</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 mb-10">
          <h1 className=" font-semibold text-xl">Discovery</h1>
          <div className=" font-medium flex flex-col gap-2">
            <p>Canada</p>
            <p>United States</p>
            <p>Germany</p>
            <p>Africa</p>
            <p>India</p>
          </div>
        </div>

        <div className="flex relative flex-col gap-4 items-start ">
          <h1 className=" text-left font-semibold text-xl w-[200px] mb-6">
            Subscribe to our Newsletter!
          </h1>
          <input
            placeholder="Email Address"
            className=" pl-3 rounded-lg w-80 h-14 bg-white shadow py-3 mb-8 "
          ></input>
          <img
            className=" absolute right-[19px] w-[40px] z-50 bottom-[155px]"
            src={Rectangle40}
          ></img>
          <img
            src={arrow}
            className="absolute top-[115px] right-[30px] z-100"
          />
          <img src={Group84} className="mb-8"></img>
        </div>
      </div>

      <div className="w-auto h-auto bg-neutral-950 px-24 py-4 flex justify-between">
        <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
          © Rezilla – All rights reserved
        </p>
        <div className=" h-auto justify-start items-start gap-10 inline-flex">
          <p className="text-right text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
            Terms and Conditions
          </p>
          <p className="text-right text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
            Privacy Policy
          </p>
          <p className="text-right text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
            Disclaimer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
