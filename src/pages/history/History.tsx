import { Header } from "../../components/Header";
import dropdown from "../../assets/img/type-dropdown.svg";
import date from "../../assets/img/date.svg";
import tick from "../../assets/img/tick.svg";

import back from "../../assets/img/arrow-back-dbl.svg";
import front from "../../assets/img/arrow-front-dbl.svg";

import backSingle from "../../assets/img/arrow-back-single.svg";
import frontSingle from "../../assets/img/arrow-front-single.svg";
import { useState } from "react";
import { HistoryUtil } from "../../assets/js/Util/History";

export const History = () => {
  const [active, setActive] = useState(false);
  const [historyUtilArea, sethistoryUtilArea] = useState(HistoryUtil);
  const [pagination, setPagination] = useState(1);
  return (
    <div className="w-full">
      <Header active={3} page="Account History" />

      <div className="1lg:w-[90%]  w-[1140px] mx-auto  mt-[36px] mb-[60px]">
        <div className="p-[30px] rounded-[24px] bg-[#23284F] border-[1px] border-[#444869] sm:p-4 relative">
          <ul className="flex flex-col gap-4">
            <div
              className={`1lg:px-8 sm:!px-4 w-[358px] absolute top-[70px]  left-[220px] 1lg:w-[100%] 1lg:left-1/2 1lg:-translate-x-1/2 1lg:top-[90px] sm:!top-[76px] hidden ${
                active && "!block"
              }`}
            >
              <ul className="px-4 w-full rounded-bl-[16px] rounded-br-[16px] bg-[#23284F] filter-wrapper  border-[1px] border-[#3958FF]">
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listone"
                    className="checkbox-type hidden"
                    value="Deposit"
                  />
                  <label
                    htmlFor="listone"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Deposit
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listtwo"
                    className="checkbox-type hidden"
                    value="Withdraw"
                  />
                  <label
                    htmlFor="listtwo"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Withdrawal
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listthree"
                    className="checkbox-type hidden"
                    value="Withdrawal Fee"
                  />
                  <label
                    htmlFor="listthree"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Withdrawal Fee
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listfour"
                    className="checkbox-type hidden"
                    value="Withdrawal Cancelled"
                  />
                  <label
                    htmlFor="listfour"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Withdrawal Cancelled{" "}
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listfive"
                    className="checkbox-type hidden"
                    value="Bet Placed"
                  />
                  <label
                    htmlFor="listfive"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Bet Placed
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listsix"
                    className="checkbox-type hidden"
                    value="Commission Paid"
                  />
                  <label
                    htmlFor="listsix"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Commission Paid{" "}
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listseven"
                    className="checkbox-type hidden"
                    value="win"
                  />
                  <label
                    htmlFor="listseven"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Bet Win
                  </p>
                </li>
                <li className="flex items-center gap-2 px-4 h-[56px] border-b-[1px] border-b-[#444869]">
                  <input
                    type="checkbox"
                    id="listeight"
                    className="checkbox-type hidden"
                    value="void"
                  />
                  <label
                    htmlFor="listeight"
                    className="w-[22px] h-[22px] border-[1px] border-[#CCCCCC] rounded flex items-center justify-center"
                  >
                    <img src={tick} alt="" className="hidden" />
                  </label>
                  <p className="text-[#EFEFEF] text-[16px] font-bold">
                    Bet Void
                  </p>
                </li>
                <li className="flex items-center gap-2 py-3 border-b-[1px] border-b-[#444869]">
                  <button
                    className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]"
                    onClick={(e) => {
                      let parent = document.querySelector(".filter-wrapper");
                      let checkedInputs =
                        parent?.querySelectorAll("li input:checked");

                      if (checkedInputs?.length == 0) {
                        sethistoryUtilArea(HistoryUtil);
                        setActive(false);
                        return;
                      }

                      let checkboxvalues = [] as any;
                      let historyLocal = [] as any;

                      checkedInputs?.forEach((EachInput) => {
                        let input = EachInput as HTMLInputElement;
                        checkboxvalues.push(input.value);
                      });

                      HistoryUtil.forEach((Each) => {
                        let type = Each.type.name.toLowerCase();

                        checkboxvalues.forEach((EachValue: any) => {
                          let valueLower = EachValue.toLowerCase();
                          if (valueLower == type) {
                            historyLocal.push(Each);
                          }
                        });
                      });

                      sethistoryUtilArea(historyLocal);
                      setActive(false);
                    }}
                  >
                    Save Filter
                  </button>
                </li>
              </ul>
            </div>

            <li className="px-5 rounded-[16px]  flex items-center 1lg:flex-col 1lg:items-start 1lg:gap-2 1lg:px-0">
              <div className="w-[255px] flex items-center gap-3 1lg:hidden">
                <p className="text-[#CCCCCC] text-[16px] font-medium">Date</p>
              </div>
              <div
                className={`w-[211px] cursor-pointer  flex items-center gap-[10px] 1lg:bg-[#171B35] 1lg:py-4 1lg:px-5 1lg:w-full 1lg:rounded-[16px] 1lg:border-[1px] 1lg:border-[#444869] 1lg:justify-between ${
                  active && "!rounded-bl-none !rounded-br-none"
                }`}
                onClick={(e) => {
                  setActive(!active);
                }}
              >
                <p className="text-[#CCCCCC] text-[16px] font-medium">Type</p>
                <img src={dropdown} alt="" className="cursor-pointer" />
              </div>
              <div className="flex-1 flex items-center 1lg:hidden ">
                <p className="text-[#CCCCCC] text-[16px] font-medium">
                  Description
                </p>
              </div>
              <div className="w-[172px] 1lg:hidden 1lg:justify-start flex items-center  gap-2">
                <p className="text-[#CCCCCC] text-[16px] font-medium">Amount</p>
              </div>
              <div className="w-[104px] 1lg:hidden 1lg:justify-start flex items-center justify-end ">
                <p className="text-[#CCCCCC] text-[16px] font-medium">
                  Final Balance
                </p>
              </div>
            </li>

            {historyUtilArea.map((Each, key) => (
              <li
                key={key}
                className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:grid 1lg:grid-cols-2 1lg:items-start 1lg:gap-2"
              >
                <div className="w-[255px] flex items-center gap-3 1lg:w-full">
                  <img src={date} alt="" />
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    {Each.date}
                  </p>
                </div>
                <div className="w-[211px] 1lg:w-[101px] 1lg:ml-auto">
                  <button
                    className="flex items-center justify-center font-bold  border-[1px]  1lg:w-full px-[20px] py-[9px] rounded-[10px]  sm:px-[10px]"
                    style={{
                      background: `${Each.type.bgColor}`,
                      borderColor: `${Each.type.color}`,
                      color: `${Each.type.color}`,
                    }}
                  >
                    {Each.type.name}
                  </button>
                </div>
                <div className="flex-1 flex items-center 1lg:col-span-2">
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    {Each.desc}
                  </p>
                </div>
                <div className="w-[172px] 1lg:w-full 1lg:justify-start flex items-center  gap-2">
                  <p className="text-[#27AE60] text-[16px] font-medium">
                    {Each.amount}
                  </p>
                </div>
                <div className="w-[104px] 1lg:w-full 1lg:justify-end flex items-center justify-end ">
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    {Each.balance}
                  </p>
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
