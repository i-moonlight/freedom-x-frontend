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
export const WithdrawCardNew = ({ logoCustom }: any) => {
  const notify = () => toast("Copied The Content");

  const Errornotify = (errorContent: String) => toast(errorContent);

  const [password, setPassword] = useState(true);
  const [pasteValue, setpasteValue] = useState("Atif Asim");
  const [networksState, setnetworksState] = useState([]);
  const [address, setAddress] = useState("");
  const [networkSelect, setnetworkSelect] = useState("");
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    depositObj.Network(setnetworksState);
  }, []);

  const startDeposit = (e: any) => {
    depositObj.deposit(networkSelect, address, symbol, Errornotify);
  };

  return (
    <div>
      <ToastContainer hideProgressBar={true} />
      <div className="md:w-[90%] mx-auto  w-[534px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px]">
        {logoCustom && <img src={logo} alt="" className="mx-auto" />}

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select Coin
          </label>

          <DropdownCustom
            props={{ img: tether, coin: "USDT", subcoin: "TetherUS" }}
            list={[
              {
                value: "3.10",
                coin: "USDC",
                subcoin: "USDC",
                img: tether,
              },
              {
                value: "12.32",
                coin: "USDT",
                subcoin: "USDT",
                img: tether,
              },
              {
                value: "0.00",
                coin: "BUSD",
                img: tether,
                subcoin: "BUSD",
              },
              {
                value: "0.00",
                coin: "TUSD",
                subcoin: "TUSD",
                img: tether,
              },
            ]}
          />
        </div>
        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select network
          </label>

          <DropdownNetwork
            list={networksState}
            setAddress={setAddress}
            setnetworkSelect={setnetworkSelect}
            setSymbol={setSymbol}
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
            Add your TXH
          </label>

          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
            <input
              type={password ? "password" : "text"}
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              value={pasteValue}
              onChange={(e) => {
                setpasteValue(e.target.value);
              }}
            />

            <img
              src={eye}
              alt=""
              className="w-[20px] mr-2"
              onClick={(e) => {
                setPassword(!password);
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
