import { useState } from "react";
import plus from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
import { FaqInner } from "./FaqInner";
export const FaqOver = ({ EachFaq }: any) => {
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
          {EachFaq.heading}
        </h1>
        {active ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
      </div>

      {active && (
        <>
          {EachFaq.subpara && (
            <h1 className="text-[#EFEFEF] px-5 font-semibold text-[14px]">
              {EachFaq.subpara}
            </h1>
          )}
          <div className="px-[20px] py-[16px] flex flex-col gap-6">
            {EachFaq.list.map((EachList: any) => (
              <FaqInner EachList={EachList} />
            ))}
          </div>
        </>
      )}
    </li>
  );
};
