import { Header } from "../../components/Header";
import dropdownBet from "../../assets/img/dropdown-bet.svg";
import one from "../../assets/img/table-bet/one.svg";
import two from "../../assets/img/table-bet/two.svg";
import three from "../../assets/img/table-bet/three.svg";
import four from "../../assets/img/table-bet/four.svg";
import five from "../../assets/img/table-bet/five.svg";
import six from "../../assets/img/table-bet/six.svg";

import back from "../../assets/img/arrow-back-dbl.svg";
import front from "../../assets/img/arrow-front-dbl.svg";

import backSingle from "../../assets/img/arrow-back-single.svg";
import frontSingle from "../../assets/img/arrow-front-single.svg";

export const Bet = () => {
  return (
    <div className="w-full">
      <Header active={1} page="Bet History" />
      <div className="1lg:w-[90%] sm:!w-full sm:pl-4   w-[1140px] mx-auto mt-[36px] ">
        <div className="grid grid-cols-3 gap-3 mb-8 sm:flex sm:overflow-scroll">
          <div className="px-[20px] sm:px-[15px]   py-[12px] sm:min-w-[181px] rounded-[16px] bg-[#3958FF]">
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px] font-bold">
              Balance
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                2500 USDT
              </p>
              <img src={dropdownBet} alt="" className="cursor-pointer" />
            </div>
          </div>
          <div className="px-[20px] sm:min-w-[94px] py-[12px] rounded-[16px] bg-[#23284F] border-[1px] border-[#444869]  sm:px-[15px]">
            <h1 className="text-[16px] text-[#CCCCCC]  lg:text-[13px]  font-bold">
              Profit
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#27AE60] font-bold lg:text-[20px]">
                +357
              </p>
            </div>
          </div>
          <div className="px-[20px] py-[12px] rounded-[16px] bg-[#23284F]  border-[1px] border-[#444869]  sm:min-w-[104px] sm:px-[15px] sm:mr-3">
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px]  font-bold">
              Open bets
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="1lg:w-[90%]  w-[1140px] mx-auto  mb-[60px]">
        <div className="p-[30px] rounded-[24px] bg-[#23284F] border-[1px] border-[#444869] sm:p-4">
          <ul className="flex flex-col gap-4">
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] flex items-center gap-3 1lg:w-full">
                <img src={one} alt="" />
                <p className="text-[#EFEFEF] font-bold">FIFA World cup</p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] 1lg:w-full px-[20px] py-[9px] rounded-[10px]  sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#3958FF] font-bold bg-[#1D285D] border-[1px] 1lg:w-full border-[#3958FF] px-[20px] py-[9px] rounded-[10px] sm:px-[10px]">
                  Live
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] flex items-center gap-3 1lg:w-full">
                <img src={two} alt="" />
                <p className="text-[#EFEFEF] font-bold">Tennis</p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#EB5757] font-semibold px-[10px] rounded-[10px] text-[18px]">
                  -42
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px] 1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#EB5757] font-bold bg-[#2D2139] border-[1px] border-[#EB5757] px-[20px] py-[9px] rounded-[10px] 1lg:w-full sm:px-[10px]">
                  Lost
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px]  flex items-center gap-3 1lg:w-full">
                <img src={three} alt="" />
                <p className="text-[#EFEFEF] font-bold">Cricket World Cup</p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#27AE60] font-semibold px-[10px] rounded-[10px] text-[18px] ">
                  +1035
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#27AE60] font-bold bg-[#182738] border-[1px] border-[#27AE60] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Won
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] 1lg:w-full flex items-center gap-3">
                <img src={four} alt="" />
                <p className="text-[#EFEFEF] font-bold">
                  ICC Cricket World Cup U19. 2024: <br className="sm:hidden" />{" "}
                  Sri Lanka U19 vs Australia U19..
                </p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#27AE60] font-semibold px-[10px] rounded-[10px] text-[18px] ">
                  +1035
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#27AE60] font-bold bg-[#182738] border-[1px] border-[#27AE60] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Won
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] 1lg:w-full flex items-center gap-3">
                <img src={two} alt="" />
                <p className="text-[#EFEFEF] font-bold">
                  Team 1 Total Runs In Over: 25 - Over,{" "}
                  <br className="sm:hidden" /> Total Runs Sri Lanka U19 Under
                  4.5
                </p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#27AE60] font-semibold px-[10px] rounded-[10px] text-[18px] ">
                  +1035
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#27AE60] font-bold bg-[#182738] border-[1px] border-[#27AE60] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Won
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] 1lg:w-full flex items-center gap-3">
                <img src={five} alt="" />
                <p className="text-[#EFEFEF] font-bold">Tennis</p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#27AE60] font-semibold px-[10px] rounded-[10px] text-[18px] ">
                  +1035
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#27AE60] font-bold bg-[#182738] border-[1px] border-[#27AE60] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Won
                </span>
              </div>
            </li>
            <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2">
              <div className="w-[377px] 1lg:w-full flex items-center gap-3">
                <img src={six} alt="" />
                <p className="text-[#EFEFEF] font-bold">La Liga</p>
              </div>
              <div className="w-[168px] 1lg:w-full">
                <p className="text-[#EFEFEF] text-[16px]">
                  Under 2.5 Yellow Cards whilst on live whatever
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#EFEFEF] text-[16px] font-medium">
                  Stake: 50 USDT
                </p>
              </div>
              <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                <span className="flex items-center justify-center text-[#27AE60] font-semibold px-[10px] rounded-[10px] text-[18px] ">
                  +1035
                </span>
                <span className="flex items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Odd: 1.2
                </span>
                <span className="flex items-center justify-center text-[#27AE60] font-bold bg-[#182738] border-[1px] border-[#27AE60] px-[20px] py-[9px] rounded-[10px]  1lg:w-full sm:px-[10px]">
                  Won
                </span>
              </div>
            </li>
          </ul>

          <div className="flex items-center mt-5 justify-center gap-[5px] sm:gap-[2px]">
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={back} alt="" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={backSingle} alt="" />
            </button>

            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              2
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              3
            </button>
            <button className="w-8 h-8 rounded-[8px] bg-[#171B35] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              ...
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              10
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={frontSingle} alt="" />
            </button>

            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={front} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
