import logo from "../assets/img/logo.svg";
import { DropdownCustom } from "../components/Dropdown";
import tether from "../assets/img/tether.svg";
import copys from "../assets/img/copy.svg";
import copyQr from "../assets/img/copy-qr.svg";
import QRCode from "react-qr-code";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DepositeCard = ({ logoCustom }: any) => {
  const notify = () => toast("Copied The Content");
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
            list={["3.10 USDC", "12.32 USDT", "0.00 BUSD", "0.00 TUSD"]}
          />
        </div>
        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select network
          </label>

          <DropdownCustom
            props={{
              mainheading: "BSC",
              coin: "BNB ",
              subcoin: "Smart Chain (BEP20)",
            }}
            list={["BSC BNB Smart Chain (BEP20)"]}
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
                0xkshjdahfl98765rfgbnjki87ytfvbnjki87ytfvbnm2345678
              </p>
              <img
                src={copyQr}
                alt=""
                className="cursor-pointer"
                onClick={(e) => {
                  notify();
                  copy("0xkshjdahfl98765rfgbnjki87ytfvbnjki87ytfvbnm2345678");
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
              type="password"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              value="................"
            />
            <img
              src={copys}
              alt=""
              className="cursor-pointer"
              onClick={(e) => {
                notify();
                copy("................");
              }}
            />
          </div>
        </div>
        <button className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]">
          Deposit
        </button>
      </div>
    </div>
  );
};
