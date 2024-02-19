import { Header } from "../../components/Header";
import dropdownBet from "../../assets/img/dropdown-bet.svg";
import dropdownBetWhite from "../../assets/img/plus-white.svg";
import football from "../../assets/img/sports/Football.jpeg";
import Alpine from "../../assets/img/sports/Alpine.jpg";
import Athletics from "../../assets/img/sports/Athletics.jpg";
import Curling from "../../assets/img/sports/Curling.jpg";
import Skiing from "../../assets/img/sports/Skiing.jpg";
import Biathlon from "../../assets/img/sports/Biathlon.jpg";
import Cricket from "../../assets/img/sports/Cricket.jpeg";
import Cycling from "../../assets/img/sports/Cycling.jpeg";
import Formula from "../../assets/img/sports/Formula 1.jpeg";
import Motorcycling from "../../assets/img/sports/Motorcycling.jpeg";
import Tennis from "../../assets/img/sports/Tennis.jpeg";

import back from "../../assets/img/arrow-back-dbl.svg";
import front from "../../assets/img/arrow-front-dbl.svg";
import backSingle from "../../assets/img/arrow-back-single.svg";
import frontSingle from "../../assets/img/arrow-front-single.svg";
import { useState, useEffect } from "react";
import { bets } from "../../assets/axios/Bets";
import { account } from "../../assets/axios/Account";

export const Bet = () => {
  const [active, setActive] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [betsState, setbetsState] = useState([]);
  const [loading, setloading] = useState(true);

  const [betsStateBackup, setbetsStateBackup] = useState([]);
  const [userAccount, setuserAccount] = useState([]);
  const [currentBalance, setcurrentBalance] = useState({
    balance: "0",
    commission: "0",
    pnl: "0",
    symbol: "",
    unsettled_balance: "0",
  });

  useEffect(() => {
    bets.getBets(setbetsState, setbetsStateBackup, setloading);
    account.getUserData(setuserAccount, setcurrentBalance, setloading);
  }, []);

  const paginationSetter = (page: any) => {
    setbetsState(
      betsStateBackup.filter((item: any, index: any) => {
        return index >= page * 3 && index < (page + 1) * 3;
      })
    );
  };

  return (
    <div className="w-full">
      {loading && (
        <div
          className="fixed top-0 left-0 h-[100vh] w-full bg-[#fff] opacity-80 z-50 flex items-center justify-center"
          style={{ backgroundColor: `rgb(29, 40, 93)` }}
        >
          <div className="ring-area">
            Loading
            <span></span>
          </div>
        </div>
      )}
      <Header active={1} page="Bet History" />
      <div className="1lg:w-[90%] sm:!w-full sm:pl-4   w-[1140px] mx-auto mt-[36px] ">
        <div className="grid grid-cols-3 gap-3 mb-8 sm:flex sm:overflow-scroll">
          <div
            className={`px-[20px] sm:px-[15px]   py-[12px] sm:min-w-[181px] rounded-[16px] bg-[#3958FF] relative sm:static ${
              active && "rounded-bl-none rounded-br-none"
            }`}
          >
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px] font-bold">
              Balance
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                <span className=" inline-block w-[80px] sm:w-[unset] sm:mr-1">
                  {Number(currentBalance.balance).toFixed(2)}
                </span>
                {currentBalance.symbol}
              </p>
              {active ? (
                <img
                  src={dropdownBetWhite}
                  alt=""
                  className="cursor-pointer"
                  onClick={(e) => {
                    setActive(!active);
                  }}
                />
              ) : (
                <img
                  src={dropdownBet}
                  alt=""
                  className="cursor-pointer"
                  onClick={(e) => {
                    setActive(!active);
                  }}
                />
              )}
            </div>
            {active && (
              <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] left-0 top-[100%] rounded-br-[8px] absolute w-full z-20 sm:top-[185px] sm:w-[181px] sm:left-[1rem]">
                {userAccount.map((EachList: any) => (
                  <li
                    onClick={(e) => {
                      setActive(false);
                      setcurrentBalance(EachList);
                    }}
                    className="text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] flex items-center cursor-pointer sm:w-[unset]"
                  >
                    <span className="inline-block w-[70px] sm:w-[unset] mr-3 text-right sm:text-left ">
                      {Number(EachList.balance).toFixed(4)}
                    </span>
                    <span className=" inline-block w-[80px] ">
                      {EachList.symbol}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-[20px] sm:min-w-[94px] py-[12px] rounded-[16px] bg-[#23284F] border-[1px] border-[#444869]  sm:px-[15px]">
            <h1 className="text-[16px] text-[#CCCCCC]  lg:text-[13px]  font-bold">
              Profit
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p
                className={`text-[30px] font-bold lg:text-[20px]
               ${
                 currentBalance.pnl.split("-").length > 1
                   ? "text-[#EB5757] "
                   : "text-[#27AE60] "
               }`}
              >
                {Number(currentBalance.pnl).toFixed(4)}
              </p>
            </div>
          </div>
          <div className="px-[20px] py-[12px] rounded-[16px] bg-[#23284F]  border-[1px] border-[#444869]  sm:min-w-[104px] sm:px-[15px] sm:mr-3">
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px]  font-bold">
              Open bets
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                {Number(currentBalance.unsettled_balance).toFixed(4)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="1lg:w-[90%]  w-[1140px] mx-auto  mb-[60px]">
        <div className="p-[30px] rounded-[24px] bg-[#23284F] border-[1px] border-[#444869] sm:p-4">
          <ul className="flex flex-col gap-4">
            {betsState.map((EachBet: any) => (
              <li
                key={EachBet._id}
                className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2"
              >
                <div className="w-[377px] flex items-center gap-3 1lg:w-full">
                  {EachBet.sport == "Football" && (
                    <img
                      src={football}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Alpine Skiing" && (
                    <img
                      src={Alpine}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Biathlon" && (
                    <img
                      src={Biathlon}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Cricket" && (
                    <img
                      src={Cricket}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Cycling" && (
                    <img
                      src={Cycling}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Formula 1" && (
                    <img
                      src={Formula}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Motorcycling" && (
                    <img
                      src={Motorcycling}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Tennis" && (
                    <img
                      src={Tennis}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}

                  {EachBet.sport == "Athletics" && (
                    <img
                      src={Athletics}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}
                  {EachBet.sport == "Skiing" && (
                    <img
                      src={Skiing}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}

                  {EachBet.sport == "Curling" && (
                    <img
                      src={Curling}
                      className="w-[45px] rounded-full"
                      alt=""
                    />
                  )}

                  <p className="text-[#EFEFEF] font-bold">{EachBet["event"]}</p>
                </div>
                <div className="w-[168px] 1lg:w-full">
                  <p className="text-[#EFEFEF] text-[16px]">{EachBet["bet"]}</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    Stake: {EachBet["stake"]}
                  </p>
                </div>
                <div className="w-[268px] 1lg:w-full 1lg:justify-start flex items-center justify-end gap-2">
                  <span
                    className="flex text-[14px] items-center justify-center font-semibold  px-[10px] sm:text-[12px] rounded-[10px] text-[18px] 1lg:w-[70%]"
                    style={
                      EachBet["status"] == "win"
                        ? {
                            color: "#27AE60",
                          }
                        : {
                            color: "#EB5757",
                          }
                    }
                  >
                    {EachBet["status"] == "win" &&
                      Math.abs(EachBet["stake"] * (1 - EachBet["odd"])).toFixed(
                        3
                      )}

                    {EachBet["status"] == "lose" &&
                      Number(EachBet["stake"] * (1 - EachBet["odd"])).toFixed(
                        3
                      )}
                  </span>
                  <span className="flex text-[14px] items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] 1lg:w-full px-[10px] py-[9px] rounded-[10px]  sm:px-[10px] sm:text-[12px]">
                    Odd: {EachBet["odd"]}
                  </span>
                  <span
                    className="flex items-center text-[14px] justify-center  font-bold border-[1px] 1lg:w-full  px-[20px] py-[9px] rounded-[10px] sm:px-[10px] sm:text-[12px] capitalize"
                    style={
                      EachBet["status"] == "win"
                        ? {
                            color: "#3958FF",
                            borderColor: "#3958FF",
                            backgroundColor: "#1D285D",
                          }
                        : {
                            color: "#EB5757",
                            borderColor: "#EB5757",
                            backgroundColor: "#2D2139",
                          }
                    }
                  >
                    {EachBet["status"]}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center mt-5 justify-center gap-[5px] sm:gap-[2px]">
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={back} alt="" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] flex items-center justify-center">
              <img src={backSingle} alt="" />
            </button>

            <button
              className={`w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center ${
                pagination == 1 && "bg-[#3958FF]"
              }`}
              onClick={(e) => {
                setPagination(1);
              }}
            >
              1
            </button>
            <button
              className={`w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center ${
                pagination == 2 && "bg-[#3958FF]"
              }`}
              onClick={(e) => {
                paginationSetter(2);
                setPagination(2);
              }}
            >
              2
            </button>
            <button
              className={`w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center ${
                pagination == 3 && "bg-[#3958FF]"
              }`}
              onClick={(e) => {
                setPagination(3);
              }}
            >
              3
            </button>
            <button className="w-8 h-8 rounded-[8px] bg-[#171B35] text-[#CCCCCC] text-[12px] flex items-center justify-center">
              ...
            </button>
            <button
              className={`w-8 h-8 rounded-full bg-[#171B35] border-[1px] border-[#3B3D53] text-[#CCCCCC] text-[12px] flex items-center justify-center ${
                pagination == 10 && "bg-[#3958FF]"
              }`}
              onClick={(e) => {
                setPagination(10);
              }}
            >
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
