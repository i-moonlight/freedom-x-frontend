"use client";

import { useEffect, useState } from "react";
import dropdown from "../assets/img/dropdown.svg";
export const WithdrawNetwork = ({
  list,
  activeDropdown,
  setactiveDropdown,
}: any) => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(list[0]);

  useEffect(() => {
    if (list.length > 0) {
      setActiveList(list[0]);
    }
  }, [list]);
  return (
    <div className="relative">
      <div
        className={`flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer ${
          activeDropdown == "withdrawNetwork" &&
          "rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          activeDropdown == "withdrawNetwork"
            ? setactiveDropdown(null)
            : setactiveDropdown("withdrawNetwork");
        }}
      >
        <h1 className="text-[#fff] text-[16px] flex-1">{activeList?._id}</h1>

        <img src={dropdown} alt="" />
      </div>
      {activeDropdown == "withdrawNetwork" && (
        <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
          {list.map((EachList: any) => (
            <li
              className="text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] flex items-center cursor-pointer"
              onClick={(e) => {
                setActiveList(EachList);
                setactiveDropdown(null);
              }}
            >
              {EachList._id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
