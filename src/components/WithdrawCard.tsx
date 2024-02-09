import { DropdownCustom } from "../components/Dropdown";
import tether from "../assets/img/tether.svg";
import copys from "../assets/img/copy.svg";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const WithdrawCard = ({ setDone }: any) => {
  const notify = () => toast("Copied The Content");
  const [active, setActive] = useState("");
  function randomIntFromInterval(min: any, max: any) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div>
      <ToastContainer hideProgressBar={true} />
      <div className="md:w-[90%] mx-auto  w-[534px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px] mb-5">
        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select Account
          </label>

          <DropdownCustom
            props={{ img: tether, coin: "USDT", subcoin: "TetherUS" }}
            list={["3.10 USDC", "12.32 USDT", "0.00 BUSD", "0.00 TUSD"]}
          />
        </div>

        <div className="mt-6 relative">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Address
          </label>

          <div
            className={`flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer ${
              active.length > 0 && "rounded-bl-none rounded-br-none"
            }`}
          >
            <input
              type="password"
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
              onClick={(e) => {
                notify();
                copy(active);
              }}
            />
          </div>

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
          )}
        </div>

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Network
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
        <div className="mt-6">
          <div className=" bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[81px]  px-3 cursor-pointer flex flex-col justify-center">
            <p className="text-[#CCCCCC] text-[16px] ">Amount</p>
            <div className="flex items-center">
              <input
                type="password"
                className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0 placeholder:text-[#EFEFEF]"
                placeholder="0 USDT"
              />
              <button className="text-[#EFEFEF] text-[15px] border-[1px] border-[#3958FF]  h-[31px] w-[60px] rounded">
                Max{" "}
              </button>
            </div>
          </div>
          <p className="text-[#EFEFEF] text-[12px] mt-2">Available 2321 USDT</p>
        </div>
        <div className="mt-4 mb-6">
          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
            <input
              type="password"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              placeholder="Fee"
            />
            <p className="text-[#EFEFEF] text-[18px] font-semibold">
              0.29 USDT
            </p>
          </div>
        </div>

        <button
          className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]"
          onClick={(e) => {
            const rndInt = randomIntFromInterval(1, 2);
            setDone(rndInt === 1 ? true : false);

            setTimeout(() => {
              setDone(null);
            }, 4000);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
