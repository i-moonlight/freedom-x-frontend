import logo from "../assets/img/logo.svg";
import { DropdownCustom } from "../components/Dropdown";
import tether from "../assets/img/tether.svg";
import copy from "../assets/img/copy.svg";
export const WithdrawCard = ({ logoCustom }: any) => {
  return (
    <div>
      <div className="md:w-[90%] mx-auto  w-[534px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px] mb-5">
        {logoCustom && <img src={logo} alt="" className="mx-auto" />}

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Select Account
          </label>

          <DropdownCustom
            props={{ img: tether, coin: "USDT", subcoin: "TetherUS" }}
          />
        </div>

        <div className="mt-6">
          <label htmlFor="#" className="text-[#FFFFFF] text-[17px] mb-2 block">
            Address
          </label>

          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
            <input
              type="password"
              className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
              placeholder="Enter address"
            />
            <img src={copy} alt="" className="cursor-pointer" />
          </div>
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

        <button className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]">
          Deposit
        </button>
      </div>
    </div>
  );
};
