import React from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";

function Footer() {
  return (
    <div>
      <div className="h-[420px] bg-indigo-100 flex justify-center items-center text-gray-700 ">
        <div className="flex flex-col gap-18 font-semibold ">
          <div className=" flex flex-col gap-10">
            <img src={logo1} className="w-[123px]" />
            <p className="w-[188px]">
              2728 Hickory StreetSalt Lake City, UT 84104
            </p>
            <div className="flex flex-col gap-12">
              <div className="flex">
                <img src={logo2}></img>
                <p>+1 206-214-2298</p>
              </div>
              <div className="flex">
                <img src={logo3} />
                <p>support@rezilla.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 mt-6">
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
        <div className="flex flex-col gap-12 mt-6">
          <h1 className="font-semibold text-xl">Discovery</h1>
          <div className="font-medium flex flex-col gap-2">
            <p>Canada</p>
            <p>United States</p>
            <p>Germany</p>
            <p>Africa</p>
            <p>India</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 mt-6">
          <h1 className="font-semibold text-xl">
            Subscribe to our Newsletter!
          </h1>
          <div className="font-medium flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-80 h-14 bg-white rounded-lg shadow"
            />
          </div>
        </div>
      </div>
      <div className=" h-12 bg-neutral-950 flex ">
        <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
          © Rezilla – All rights reserved
        </p>
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
  );
}

export default Footer;
