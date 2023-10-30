import React from "react";

function Towns({ num, location, img }) {
  return (
    <div className=" relative ">
      <div className=" ">
        <img src={img} />
      </div>
      <div className=" absolute flex flex-col gap-3 text-white font-bold   top-[230px] left-[60px]">
        <p className="mr-auto opacity-40 text-5xl">{num}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Towns;
