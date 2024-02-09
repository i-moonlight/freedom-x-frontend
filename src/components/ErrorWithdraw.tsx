import React from "react";
import error from "../assets/img/error.svg";
import circleError from "../assets/img/gradient/circle-error.svg";

export const ErrorWithdraw = () => {
  return (
    <div className="px-[16px] py-[12px] border-[1px] border-[#EB5757] bg-[#23284F] rounded-[12px] flex w-[343px] flex-col items-center justify-center text-center overflow-hidden  fixed bottom-10 left-1/2 -translate-x-1/2 sm:w-[90%]">
      <img src={circleError} alt="" className="absolute bottom-0" />

      <img src={error} alt="" />
      <h1 className="text-[#fff]  mt-4 mb-1">Error!!</h1>
      <p className="text-[#C8C5C5] text-[16px] ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
    </div>
  );
};
