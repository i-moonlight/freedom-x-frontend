"use client";

import { useState } from "react";
import dropdown from "../assets/img/dropdown.svg";
export const DropdownCustom = ({ props, list }: any) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <div
        className={`flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer ${
          active && "rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          setActive(!active);
        }}
      >
        {props.img && <img src={props.img} alt="" />}
        {props.mainheading && (
          <h1 className="text-[#fff] text-[16px]">{props.mainheading}</h1>
        )}

        <h1 className="text-[#CCCCCC] text-[16px] mx-2">{props.coin}</h1>
        <h1 className="text-[#CCCCCC] text-[16px] flex-1">{props.subcoin}</h1>
        <img src={dropdown} alt="" />
      </div>
      {active && (
        <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
          {list.map((EachList: String) => (
            <li className="text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] flex items-center cursor-pointer">
              {EachList}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
