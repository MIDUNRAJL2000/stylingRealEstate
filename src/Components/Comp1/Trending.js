import React from "react";

function Trending({ num1, day, img }) {
  return (
    <div className="relative">
      <div className="">
        <img src={img} />
      </div>
      <div className="w-12 h-12 p-2.5 bg-white rounded-bl-lg rounded-br-lg shadow flex-col justify-start items-center gap-1 inline-flex">
        <p className="text-center text-zinc-800 text-xl font-medium font-['Poppins']">
          {num1}
        </p>
        <p className="text-center text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
          {day}
        </p>
      </div>
    </div>
  );
}

export default Trending;
