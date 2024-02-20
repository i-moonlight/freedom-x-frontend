import logo from "../assets/img/logo.svg";
import { DropdownCustom } from "../components/Dropdown";
import tether from "../assets/img/tether.svg";
import copys from "../assets/img/copy.svg";
import copyQr from "../assets/img/copy-qr.svg";
import QRCode from "react-qr-code";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DropdownNetwork } from "./DropdownNetwork";
import eye from "../assets/img/eye.svg";
import { useEffect, useState } from "react";
import { depositObj } from "../assets/axios/Deposit";
import { account } from "../assets/axios/Account";
export const DepositeCard = ({ logoCustom }: any) => {
  const notify = () => toast("Copied The Content");

  const Errornotify = (errorContent: String) => toast(errorContent);
  const [loading, setloading] = useState(true);
  const [activeDropdown, setactiveDropdown] = useState(null);
  const [pasteValue, setpasteValue] = useState("Atif Asim");
  const [networksState, setnetworksState] = useState([]);

  const [address, setAddress] = useState("");
  const [networkSelect, setnetworkSelect] = useState("");
  const [symbol, setSymbol] = useState("");
  const [userAccount, setuserAccount] = useState(true);
  const [additionState, setadditionState] = useState([]);
  const [currentBalance, setcurrentBalance] = useState(true);
  const [currentFee, setcurrentFee] = useState("");
  const [globalDataAccount, setglobalDataAccount] = useState({
    balance: "0",
    commission: "0",
    pnl: "0",
    symbol: "",
    unsettled_balance: "0",
  });

  useEffect(() => {
    account.getUserData(setuserAccount, setcurrentBalance, setloading);
    depositObj.Network(setnetworksState, setloading);
  }, []);

  const startDeposit = (e: any) => {
    setloading(true);
    depositObj.deposit(
      networkSelect,
      pasteValue,
      symbol,
      Errornotify,
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
      <div className="md:w-[90%] mx-auto  w-[534px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px]">
        {logoCustom && <img src={logo} alt="" className="mx-auto" />}

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select Coin
          </label>

          <DropdownCustom
            list={userAccount}
            setglobalDataAccount={setglobalDataAccount}
            setactiveDropdown={setactiveDropdown}
            activeDropdown={activeDropdown}
            setadditionState={setadditionState}
            networksState={networksState}
            setcurrentFee={setcurrentFee}
          />
        </div>
        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select network
          </label>

          <DropdownNetwork
            list={additionState}
            setAddress={setAddress}
            setnetworkSelect={setnetworkSelect}
            setSymbol={setSymbol}
            setactiveDropdown={setactiveDropdown}
            activeDropdown={activeDropdown}
          />
        </div>
        <div className="mt-6 flex items-center  gap-[13px]">
          <div className="p-[6px] bg-[#fff] w-[94px] h-[94px] rounded-lg">
            <QRCode
              className="w-full h-full"
              value="0xkshjdahfl98765rfgbnjki87ytfvbnjki87ytfvbnm2345678"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-[#FFFFFF] font-bold">Deposit Address</h1>
            <div className="flex items-center justify-between mt-[14px]">
              <p className="w-[194px] break-words text-[#FFFFFF] text-[14px] sm:w-[150px]">
                {address}
              </p>
              <img
                src={copyQr}
                alt=""
                className="cursor-pointer"
                onClick={(e) => {
                  notify();
                  copy(address);
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Transaction Proof (Transaction Hash)
          </label>

          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
            <input
              type="text"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              value={pasteValue}
              onChange={(e) => {
                setpasteValue(e.target.value);
              }}
            />

            <img
              src={copys}
              alt=""
              className="cursor-pointer"
              onClick={async (e) => {
                const text = await navigator.clipboard.readText();
                setpasteValue(text);
              }}
            />
          </div>
        </div>
        <button
          className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]"
          onClick={startDeposit}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};
