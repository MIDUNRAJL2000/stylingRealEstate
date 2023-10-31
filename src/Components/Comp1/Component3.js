import React from "react";
import Towns from "./Towns";
import img from "../../assets/loca.svg";
import img1 from "../../assets/Rectangle25.svg";
import img2 from "../../assets/Rectangle26.svg";
import img3 from "../../assets/Rectangle27.svg";
import img4 from "../../assets/Rectangle28.svg";
import img5 from "../../assets/Rectangle 29.svg";
import img6 from "../../assets/Rectangle 30.svg";
import img7 from "../../assets/Rectangle 31.svg";
import img8 from "../../assets/Rectangle 32.svg";
import EllipseShade3 from "../../assets/EllipseShade3.svg";
import EllipseShade4 from "../../assets/EllipseShade4.svg";

function Component3() {
  return (
    <div>
      {" "}
      <img
        src={EllipseShade3}
        className="absolute left-[690px] mt-12 w-12 h-12 "
      />
      <div className="   pt-44 bg-white mb-[0px]">
        <div className="ml-28">
          <p className="w-96  text-blue-600 text-xl text-left font-medium font-['Poppins'] tracking-widest">
            AREAS ACROSS THE TOWN
          </p>
          <p className="w-100 text-left text-zinc-800 text-3xl font-semibold font-['Poppins'] leading-10">
            Neighborhood Properties
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 mt-12">
          <Towns num={"216"} location={"New York City, NY"} img={img}></Towns>
          <Towns num={"141"} location={"Houston, TX"} img={img1}></Towns>
          <Towns num={"212"} location={"San Diego, CA"} img={img2}></Towns>
        </div>
        <div className="flex justify-center items-center gap-24">
          <Towns num={"183"} location={"Philadelphia, PA"} img={img3}></Towns>
          <Towns num={"112"} location={"San Francisco, CA"} img={img4}></Towns>
        </div>
      </div>
      <img
        src={EllipseShade4}
        className="w-24 h-24 mt-[5px] absolute right-[150px]"
      />
      <p className="text-center text-blue-600 text-xl font-medium font-['Poppins'] uppercase tracking-widest mt-40">
        INTRODUCE YOURSELF TO
      </p>
      <p className=" text-center text-zinc-800 text-4xl font-semibold font-['Poppins'] leading-10 mt-3">
        Our Team of Experts
      </p>
      <div className="flex px-32 gap-32 mt-14 ">
        <div className="w-48 h-96">
          <img src={img5} />
          <p className="text-center text-neutral-950 text-2xl font-semibold font-['Poppins']">
            Brendon M
          </p>
          <p className="text-center text-blue-600 text-base font-medium font-['Poppins']">
            CEO & Founder
          </p>
        </div>
        <div className="w-48 h-96 ">
          <img src={img6} />
          <p className="text-center text-neutral-950 text-2xl font-semibold font-['Poppins']">
            Jodi J. Appleby
          </p>
          <p className="text-center text-blue-600 text-base font-medium font-['Poppins']">
            Real Estate Developer
          </p>
        </div>
        <div className="w-48 h-96">
          <img src={img7} />
          <p className="text-center text-neutral-950 text-2xl font-semibold font-['Poppins']">
            Justin S. Meza
          </p>
          <p className="text-center text-blue-600 text-base font-medium font-['Poppins']">
            Listing Agent
          </p>
        </div>
        <div className="h-96 w-48">
          <img src={img8} />
          <p className="text-center text-neutral-950 text-2xl font-semibold font-['Poppins']">
            Susan T. Smith
          </p>
          <p className="text-center text-blue-600 text-base font-medium font-['Poppins']">
            Buyer's Agent
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component3;
