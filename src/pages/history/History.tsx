import { Header } from "../../components/Header";
import dropdown from "../../assets/img/type-dropdown.svg";
import date from "../../assets/img/date.svg";
import tick from "../../assets/img/tick.svg";
import { useEffect, useState } from "react";
import { account } from "../../assets/axios/Account";
import { Pagination } from "@mui/material";

export const History = () => {
  const [active, setActive] = useState(false);
  const [loading, setloading] = useState(true);
  const [typeMbl, settypeMbl] = useState("");
  const [historyUtilArea, sethistoryUtilArea] = useState<any>([]);
  const [accountHistory, setAccountHistory] = useState<any>([]);
  const [balance, setbalance] = useState<any>(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [currentItems, setcurrentItems] = useState([]);

  const handlePageClick = (value: any) => {
    const newOffset = ((value - 1) * 10) % accountHistory.length;

    setItemOffset(newOffset);

    const endOffset = newOffset + 10;
    setcurrentItems(accountHistory.slice(newOffset, endOffset));
  };

  useEffect(() => {
    account.getHistory(
      setAccountHistory,
      sethistoryUtilArea,
      setloading,
      setpageCount,
      setcurrentItems,
      itemOffset
    );

    let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");
    setbalance(balance);
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
                    id="listseven"
                    className="checkbox-type hidden"
                    value="bet win"
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
                    value="Bet Void"
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
                        setAccountHistory(historyUtilArea);
                        setActive(false);
                        return;
                      }

                      let checkboxvalues = [] as any;
                      let historyLocal = [] as any;
                      let checkboxInputValue = "";
                      checkedInputs?.forEach((EachInput, key) => {
                        let input = EachInput as HTMLInputElement;
                        checkboxvalues.push(input.value);
                        checkboxInputValue += `${key > 0 ? "," : ""} ${
                          input.value
                        }`;
                      });

                      historyUtilArea.forEach((Each: any) => {
                        let type = Each.type.toLowerCase();

                        checkboxvalues.forEach((EachValue: any) => {
                          let valueLower = EachValue.toLowerCase();

                          if (valueLower == type) {
                            historyLocal.push(Each);
                          }
                        });
                      });

                      settypeMbl(checkboxInputValue);

                      setAccountHistory(historyLocal);
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
                <p className="text-[#CCCCCC] text-[16px] font-medium sm:hidden">
                  Type
                </p>
                <p className="text-[#CCCCCC] text-[16px] font-medium hidden sm:block">
                  {typeMbl == "" ? "Type" : typeMbl}
                </p>
                <img src={dropdown} alt="" className="cursor-pointer" />
              </div>
              <div className="flex-1 flex items-center 1lg:hidden ">
                <p className="text-[#CCCCCC] text-[16px] font-medium">
                  Description
                </p>
              </div>
              <div className="w-[172px] 1lg:hidden 1lg:justify-start flex items-center  gap-2">
                <p className="text-[#CCCCCC] text-[16px] pl-5 font-medium">
                  Amount
                </p>
              </div>
              <div className="w-[104px] 1lg:hidden 1lg:justify-start flex items-center justify-end ">
                <p className="text-[#CCCCCC] text-[16px] font-medium">
                  Final Balance
                </p>
              </div>
            </li>

            {currentItems.map((Each: any, key: any) => (
              <li
                key={key}
                className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] flex items-center 1lg:grid 1lg:grid-cols-2 1lg:items-start 1lg:gap-2"
              >
                <div className="w-[255px] flex items-center gap-3 1lg:w-full pr-3">
                  <img src={date} alt="" />
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    {Each.created_at}
                  </p>
                </div>
                <div className="w-[211px] 1lg:w-[101px] 1lg:ml-auto">
                  <button
                    className="flex items-center justify-center font-bold  border-[1px]  1lg:w-full px-[20px] py-[9px] text-[#27AE60] bg-[#18293A] border-[#27AE60 ] rounded-[10px] border-[#27AE60]  sm:px-[0px] capitalize"
                    style={
                      Each.type == "bet placed"
                        ? {
                            background: `#2D2139`,
                            borderColor: `#EB5757`,
                            color: `#EB5757`,
                          }
                        : {}
                    }
                  >
                    {Each.type}
                  </button>
                </div>
                <div className="flex-1 flex items-center 1lg:col-span-2 pr-3">
                  <p
                    className="text-[#EFEFEF] text-[16px] font-medium"
                    style={{ wordBreak: "break-all" }}
                  >
                    {Each.description}
                  </p>
                </div>
                <div className="w-[172px] pl-5 1lg:w-full 1lg:justify-start flex items-center  gap-2 sm:pl-0">
                  <p
                    className={`text-[#27AE60] text-[16px] font-medium ${
                      Each.change.split("-").length > 1 && "text-[#EB5757]"
                    }`}
                  >
                    {Number(Each.change).toFixed(
                      balance?.symbol == "USDT" ? 2 : 8
                    )}
                  </p>
                </div>
                <div className="w-[104px] 1lg:w-full 1lg:justify-end flex items-center justify-end ">
                  <p className="text-[#EFEFEF] text-[16px] font-medium">
                    {Number(Each.balance).toFixed(
                      balance?.symbol == "USDT" ? 2 : 8
                    )}
                  </p>
                </div>
              </li>
            ))}

            {accountHistory.length == 0 && (
              <li className=" bg-[#171B35] py-4 px-5 rounded-[16px]  border-[1px] border-[#444869] h-[200px] flex items-center justify-center">
                <div className="w-full text-center">
                  <p className="text-[#EFEFEF] text-[20px] font-bold">
                    No History Found
                  </p>
                </div>
              </li>
            )}
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

          {/* {accountHistory.length > 9 && (
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
          )} */}
        </div>
      </div>
    </div>
  );
};
