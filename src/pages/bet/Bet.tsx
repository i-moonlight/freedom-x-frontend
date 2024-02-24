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
import { useState, useEffect } from "react";
import { bets } from "../../assets/axios/Bets";
import { account } from "../../assets/axios/Account";
import Pagination from "@mui/material/Pagination";

export const Bet = () => {
  const [active, setActive] = useState(false);
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
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [currentItems, setcurrentItems] = useState([]);

  const handlePageClick = (value: any) => {
    const newOffset = ((value - 1) * 10) % betsState.length;

    setItemOffset(newOffset);

    const endOffset = newOffset + 10;
    setcurrentItems(betsState.slice(newOffset, endOffset));
  };

  useEffect(() => {
    bets.getBets(
      setbetsState,
      setbetsStateBackup,
      setloading,
      setpageCount,
      setcurrentItems,
      itemOffset
    );
    account.getUserData(setuserAccount, setcurrentBalance, setloading);
  }, []);

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
            className={`px-[20px] sm:px-[15px]   py-[12px] sm:min-w-[201px] rounded-[16px] bg-[#3958FF] relative sm:static ${
              active && "rounded-bl-none rounded-br-none"
            }`}
          >
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px] font-bold">
              Balance
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                <span className=" inline-block min-w-[80px] sm:w-[unset] sm:mr-1">
                  {Number(currentBalance.balance).toFixed(
                    currentBalance.symbol == "USDT" ? 2 : 8
                  )}
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
              <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] left-0 top-[100%] rounded-br-[8px] absolute w-full z-20 sm:top-[185px] sm:w-[201px] sm:left-[1rem]">
                {userAccount.map((EachList: any) => (
                  <li
                    onClick={(e) => {
                      setActive(false);

                      window.localStorage.setItem(
                        "balance",
                        JSON.stringify(EachList)
                      );
                      setcurrentBalance(EachList);
                    }}
                    className="text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] flex items-center cursor-pointer sm:w-[unset]"
                  >
                    <span className="inline-block w-[100px] sm:w-[unset] mr-3 text-right sm:text-left ">
                      {Number(EachList.balance).toFixed(
                        EachList.symbol == "USDT" ? 2 : 8
                      )}
                    </span>
                    <span className=" inline-block w-[80px] ">
                      {EachList.symbol}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-[20px] sm:min-w-[124px] py-[12px] rounded-[16px] bg-[#23284F] border-[1px] border-[#444869]  sm:px-[15px]">
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
                {Number(currentBalance.pnl).toFixed(
                  currentBalance.symbol == "USDT" ? 2 : 8
                )}
              </p>
            </div>
          </div>
          <div className="px-[20px] py-[12px] rounded-[16px] bg-[#23284F]  border-[1px] border-[#444869]  sm:min-w-[104px] sm:px-[15px] sm:mr-3">
            <h1 className="text-[16px] text-[#CCCCCC] lg:text-[13px]  font-bold">
              Open bets
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[30px] text-[#EFEFEF] font-bold lg:text-[20px]">
                {Number(currentBalance.unsettled_balance).toFixed(
                  currentBalance.symbol == "USDT" ? 2 : 8
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="1lg:w-[90%]  w-[1140px] mx-auto  mb-[60px]">
        <div className="p-[30px] rounded-[24px] bg-[#23284F] border-[1px] border-[#444869] sm:p-4">
          <ul className="flex flex-col gap-4">
            {currentItems.map((EachBet: any) => (
              <li
                key={EachBet._id}
                className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2"
              >
                <div className="w-[330px] pr-[30px] sm:pr-[0px] flex items-center gap-3 1lg:w-full">
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

                  <p className="text-[#EFEFEF] font-bold sm:text-[15px]">
                    {EachBet["event"]}
                  </p>
                </div>
                <div className="w-[198px] 1lg:w-full">
                  <p className="text-[#EFEFEF] text-[16px] sm:text-[14px]">
                    {EachBet["bet"]}
                  </p>
                </div>
                <div className="flex-1  flex items-center justify-center">
                  <p className="text-[#EFEFEF] text-[16px]   font-medium">
                    Stake:{" "}
                    {Number(EachBet["stake"] * 100).toFixed(
                      currentBalance.symbol == "USDT" ? 2 : 8
                    )}
                    %
                  </p>
                </div>
                <div
                  className={`w-[288px] 1lg:w-full 1lg:justify-start flex items-center  gap-2 ${
                    Math.abs(EachBet["staked"] * (1 - EachBet["odd"])).toFixed(
                      3
                    ) == "0.000" && "justify-end"
                  }`}
                >
                  {Math.abs(EachBet["staked"] * (1 - EachBet["odd"])) !== 0 && (
                    <span
                      className="flex items-center  font-semibold  pr-[10px] sm:text-[12px] flex-1  sm:flex-[unset] sm:w-[100px] sm:text-center sm:justify-center rounded-[10px] text-[18px]"
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
                      {EachBet["status"] == "lose"
                        ? Number(
                            EachBet["staked"] * (1 - EachBet["odd"])
                          ).toFixed(currentBalance.symbol == "USDT" ? 2 : 8)
                        : Math.abs(
                            EachBet["staked"] * (1 - EachBet["odd"])
                          ).toFixed(currentBalance.symbol == "USDT" ? 2 : 8)}
                    </span>
                  )}

                  <span className="flex w-[90px] text-[14px] items-center justify-center text-[#fff] font-bold  border-[1px] border-[#3958FF] 1lg:w-full px-[10px] py-[9px] rounded-[10px] sm:!w-[100px]  sm:px-[10px] sm:text-[12px]">
                    Odd: {Number(EachBet["odd"]).toFixed(2)}
                  </span>
                  <span
                    className="flex items-center text-[14px] justify-center  font-bold border-[1px] 1lg:w-full  px-[20px] py-[9px] rounded-[10px] sm:px-[10px] sm:text-[12px] w-[60px]  capitalize sm:!w-[100px]"
                    style={
                      EachBet["status"] == "win"
                        ? {
                            color: "#25AF60",
                            borderColor: "#25AF60",
                            backgroundColor: "#25af614e",
                          }
                        : EachBet["status"] == "lose"
                        ? {
                            color: "#EB5757",
                            borderColor: "#EB5757",
                            backgroundColor: "#2D2139",
                          }
                        : {
                            color: "#3958FF",
                            borderColor: "#3958FF",
                            backgroundColor: "#1D285D",
                          }
                    }
                  >
                    {EachBet["status"] == "win" && "Won"}
                    {EachBet["status"] == "lose" && "Lost"}
                    {EachBet["status"] == "open" && "Open"}
                    {EachBet["status"] == "live" && "Live"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {window.innerWidth > 500 && (
            <div className="flex items-center mt-5 justify-center gap-[5px] sm:gap-[2px]">
              <Pagination
                count={pageCount}
                onChange={(
                  event: React.ChangeEvent<unknown>,
                  value: number
                ) => {
                  handlePageClick(value);
                }}
                color="primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
