import React from "react";

function Person({ img, name, message, time, count }) {
  return (
    <div className=" flex items-center justify-between hover:bg-[#F2EBEB] pl-[3%] pr-2 py-2 rounded-lg cursor-pointer ">
      <div className=" flex items-center gap-6 ">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4 className=" font-semibold text-[#444444] ">{name}</h4>
          <h5 className=" text-[#5A5A5A] ">{message}</h5>
        </div>
      </div>
      <div className=" flex flex-col items-end ">
        <h5 className=" text-[#5A5A5A] ">{time}</h5>
        <div className={` ${count ? "bg-[#D71A21]": null} w-5 h-5 flex items-center justify-center  rounded-[50%] `}>
          <div className="  text-[#fff]   ">{count}</div>
        </div>
      </div>
    </div>
  );
}

export default Person;
