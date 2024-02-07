"use client";

import dropdown from "../assets/img/dropdown.svg";
export const DropdownCustom = ({ props }: any) => {
  return (
    <div>
      <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
        {props.img && <img src={props.img} alt="" />}
        {props.mainheading && (
          <h1 className="text-[#fff] text-[16px]">{props.mainheading}</h1>
        )}

        <h1 className="text-[#CCCCCC] text-[16px] mx-2">{props.coin}</h1>
        <h1 className="text-[#CCCCCC] text-[16px] flex-1">{props.subcoin}</h1>
        <img src={dropdown} alt="" />
      </div>
    </div>
  );
};
