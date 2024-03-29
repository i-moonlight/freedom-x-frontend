import { useState } from "react";
import date from "../assets/img/date.svg";
export const MonthDropdown = ({ setupdateval }: any) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("This Month");
  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between gap-2 px-4 py-[10px] border-[1px] border-[#38425C] w-[174px] rounded-lg cursor-pointer ${
          active &&
          "bg-[#3958FF]  border-[#3958FF] rounded-bl-none rounded-br-none"
        }`}
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <img src={date} alt="" />
        <p className="text-[#FFFFFF] font-semibold md:text-[15px] capitalize">
          {value}
        </p>
      </div>
      {active && (
        <ul className="bg-[#23284F]  px-4 border-[1px] border-[#3958FF] rounded-[8px] -right-[26px]  z-50 top-[45px] w-[200px] rounded-tl-none absolute  ">
          <li
            className={`text-[#EFEFEF] font-bold text-[16px] h-[58px]  justify-center flex items-center capitalize cursor-pointer border-b-[1px] border-b-[#3B3C54]`}
            onClick={(e) => {
              setActive(false);
              setValue("This month");
              setupdateval("This month");
            }}
          >
            This month
          </li>
          <li
            onClick={(e) => {
              setActive(false);
              setValue("last 3 months");
              setupdateval("last 3 months");
            }}
            className={`text-[#EFEFEF] font-bold text-[16px] h-[58px] justify-center flex items-center capitalize cursor-pointer border-b-[1px] border-b-[#3B3C54]`}
          >
            last 3 months
          </li>
          <li
            onClick={(e) => {
              setActive(false);
              setValue("Last 6 months");
              setupdateval("Last 6 months");
            }}
            className={`text-[#EFEFEF] font-bold text-[16px] h-[58px]  justify-center flex items-center capitalize cursor-pointer border-b-[1px] border-b-[#3B3C54]`}
          >
            Last 6 months
          </li>
          <li
            onClick={(e) => {
              setActive(false);
              setValue("Last year");
              setupdateval("Last year");
            }}
            className={`text-[#EFEFEF] font-bold text-[16px] h-[58px] justify-center flex items-center capitalize cursor-pointer border-b-[1px] border-b-[#3B3C54]`}
          >
            Last year
          </li>
          <li
            onClick={(e) => {
              setActive(false);
              setValue("Last 5 Years");
              setupdateval("Last 5 Years");
            }}
            className={`text-[#EFEFEF] font-bold text-[16px] h-[58px] justify-center flex items-center capitalize cursor-pointer border-b-[1px] border-b-[#3B3C54]`}
          >
            Last 5 Years
          </li>
        </ul>
      )}
    </div>
  );
};
