import { useState } from "react";
import plus from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
import { FaqInner } from "./FaqInner";
export const FaqOver = () => {
  const [active, setActive] = useState(false);
  return (
    <li
      className={`border-[1px] border-[#3C3E56] rounded-[12px] w-full ${
        active === true && "bg-[#23284F]"
      }`}
    >
      <div
        className="head px-[20px] py-[16px] flex items-center cursor-pointer justify-between"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <h1 className="text-[#EFEFEF] font-semibold text-[18px]">
          Amet minim mollit non deserunt ullamco.
        </h1>
        {active ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
      </div>
      {active && (
        <div className="px-[20px] py-[16px] flex flex-col gap-6">
          <FaqInner />
          <FaqInner />
          <FaqInner />
        </div>
      )}
    </li>
  );
};
