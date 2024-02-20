import { DropdownCustom } from "../components/Dropdown";
import copys from "../assets/img/copy.svg";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "../assets/img/eye.svg";
import { account } from "../assets/axios/Account";
import { depositObj } from "../assets/axios/Deposit";
import { WithdrawNetwork } from "./WithdrawNetwork";
import { withdrawObj } from "../assets/axios/Withdraw";
export const WithdrawCard = ({ setDone }: any) => {
  const notify = () => toast("Copied The Content");
  const [active, setActive] = useState("");
  const [loading, setloading] = useState(true);
  const [Amount, setAmount] = useState("");
  const [activeDropdown, setactiveDropdown] = useState(null);

  const [globalDataAccount, setglobalDataAccount] = useState({
    balance: "0",
    commission: "0",
    pnl: "0",
    symbol: "",
    unsettled_balance: "0",
  });
  const [networksState, setnetworksState] = useState([]);
  const [additionState, setadditionState] = useState([]);
  const [userAccount, setuserAccount] = useState(true);
  const [currentBalance, setcurrentBalance] = useState(true);
  const [currentFee, setcurrentFee] = useState("");

  useEffect(() => {
    account.getUserData(setuserAccount, setcurrentBalance, setloading);
    depositObj.Network(setnetworksState, setloading);
  }, []);

  const startWithdrawProcess = (e: any) => {
    setloading(true);
    withdrawObj.withdraw(
      additionState[0]["_id"],
      Amount,
      active,
      additionState[0]["symbols"][0]["id"],
      setDone,
      setloading
    );
  };

  return (
    <div>
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
      <ToastContainer hideProgressBar={true} />
      <div className="md:w-[90%] mx-auto  w-[534px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px] mb-5">
        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select Account
          </label>

          <DropdownCustom
            list={userAccount}
            setglobalDataAccount={setglobalDataAccount}
            networksState={networksState}
            setadditionState={setadditionState}
            setcurrentFee={setcurrentFee}
            setactiveDropdown={setactiveDropdown}
            activeDropdown={activeDropdown}
          />
        </div>

        <div className="mt-6 relative">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Address
          </label>

          <div
            className={`flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer ${
              active.length > 1000 && "rounded-bl-none rounded-br-none"
            }`}
          >
            <input
              type="text"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              placeholder="Enter address"
              value={active}
              onChange={(e) => {
                setActive(e.target.value);
              }}
            />

            <img
              src={copys}
              alt=""
              className="cursor-pointer"
              onClick={async (e) => {
                const text = await navigator.clipboard.readText();
                setActive(text);
              }}
            />
          </div>
          {/* 
          {active.length > 0 && (
            <ul className="bg-[#23284F] px-[20px] border-[1px] border-[#3958FF] rounded-bl-[8px] rounded-br-[8px] absolute w-full z-20">
              {[
                "0xkshjdahfl95rfgb..7yvbnm2345678",
                "0xkshjdahfl95rfgb..7yvbnm2345678",
                "0xkshjdahfl95rfgb..7yvbnm2345678",
                "0xkshjdahfl95rfgb..7yvbnm2345678",
              ].map((EachAddress, key) => (
                <li
                  className={`text-[16px] font-bold text-[#EFEFEF] h-[56px] border-b-[1px] border-b-[#444869] cursor-pointer flex flex-col justify-center`}
                >
                  <h3 className="text-[#CCCCCC] text-[12px] font-bold">
                    Address Name
                  </h3>
                  <p className="text-[#fff] text-[12px] font-bold">
                    {EachAddress}
                  </p>
                </li>
              ))}
            </ul>
          )} */}
        </div>

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Network
          </label>

          <WithdrawNetwork
            list={additionState}
            setactiveDropdown={setactiveDropdown}
            activeDropdown={activeDropdown}
          />
        </div>
        <div className="mt-6">
          <div className=" bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[81px]  px-3 cursor-pointer flex flex-col justify-center">
            <p className="text-[#CCCCCC] text-[16px] ">Amount</p>
            <div className="flex items-center">
              <input
                type="number"
                className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0 placeholder:text-[#EFEFEF]"
                placeholder={`${globalDataAccount?.balance} ${globalDataAccount?.symbol}`}
                value={Amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <button
                className="text-[#EFEFEF] text-[15px] border-[1px] border-[#3958FF]  h-[31px] w-[60px] rounded"
                onClick={(e) => {
                  setAmount(Number(globalDataAccount?.balance).toFixed(2));
                }}
              >
                Max
              </button>
            </div>
          </div>
          <p className="text-[#EFEFEF] text-[12px] mt-2">
            Available {Number(globalDataAccount?.balance).toFixed(2)}{" "}
            {globalDataAccount?.symbol}
          </p>
        </div>
        <div className="mt-4 mb-6">
          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
            <input
              type="password"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              readOnly
              placeholder="Fee"
            />
            <p className="text-[#EFEFEF] text-[18px] font-semibold">
              {currentFee} {globalDataAccount?.symbol}
            </p>
          </div>
        </div>

        <button
          className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]"
          onClick={startWithdrawProcess}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
