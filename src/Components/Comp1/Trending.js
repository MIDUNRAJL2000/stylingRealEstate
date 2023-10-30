import React from "react";

function Trending({ day, date, img }) {
  return (
    <div className="relative">
      <div className=" ">
        <img className="z-0" src={img} />
      </div>
      <div className="w-12 h-12 p-2.5 bg-white rounded-bl-lg rounded-br-lg shadow flex-col absolute top-[19px] left-16 z-30 justify-start items-center gap-1 inline-flex">
        <p className=" my-[-10px] text-center text-zinc-800 text-xl font-medium font-['Poppins']">
          {day}
        </p>
        <p className="text-center text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
          {date}
        </p>
      </div>
    </div>
  );
}

export default Trending;
