import { DropdownCustom } from "../components/Dropdown";
import tether from "../assets/img/tether.svg";
import copys from "../assets/img/copy.svg";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DropdownNetwork } from "./DropdownNetwork";
import eye from "../assets/img/eye.svg";
export const WithdrawCard = ({ setDone }: any) => {
  const notify = () => toast("Copied The Content");
  const [active, setActive] = useState("");
  const [Amount, setAmount] = useState("");
  const maxValue = "2321";
  const [password, setPassword] = useState(true);
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
              type={password ? "password" : "text"}
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              placeholder="Enter address"
              value={active}
              onChange={(e) => {
                setActive(e.target.value);
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
                setActive(text);
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

          <DropdownNetwork
            props="BSC BNB Smart Chain (BEP20)"
            list={["BSC BNB Smart Chain (BEP20)"]}
          />
        </div>
        <div className="mt-6">
          <div className=" bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[81px]  px-3 cursor-pointer flex flex-col justify-center">
            <p className="text-[#CCCCCC] text-[16px] ">Amount</p>
            <div className="flex items-center">
              <input
                type="number"
                className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0 placeholder:text-[#EFEFEF]"
                placeholder="0 USDT"
                value={Amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <button
                className="text-[#EFEFEF] text-[15px] border-[1px] border-[#3958FF]  h-[31px] w-[60px] rounded"
                onClick={(e) => {
                  setAmount(maxValue);
                }}
              >
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
              readOnly
              placeholder="Fee"
            />
            <p className="text-[#EFEFEF] text-[18px] font-semibold">
              {Number(Number(Amount) * 0.2).toFixed(2)} USDT
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
