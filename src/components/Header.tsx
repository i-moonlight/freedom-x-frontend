import logo from "../assets/img/logo.svg";
import notifyNan from "../assets/img/notify-nan.svg";
import burger from "../assets/img/burger.svg";

import { Link } from "react-router-dom";
export const Header = ({ active, page }: any) => {
  return (
    <header className="w-full bg-[#171B35] h-[70px] border-b-[1px] border-b-[#3B3D53]">
      <div className="max-w-[1140px] mx-auto h-full w-[90%] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="" className="w-[35px] h-[50px]" />
          </Link>
          <img src={notifyNan} alt="" className="cursor-pointer" />
        </div>
        <h1 className="text-[#FFFFFF] font-semibold hidden 1lg:block">
          {page}
        </h1>
        <div className="hidden 1lg:block">
          <img src={burger} alt="" />
        </div>
        <div className="flex items-center gap-3 1lg:hidden">
          <nav className="flex items-center h-[52px] border-[1px] border-[#3B3D53] rounded-full px-1">
            <Link
              to="/Bet"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 1 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Bet History
            </Link>
            <Link
              to="/Bet"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 2 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/Bet"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 3 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Account History
            </Link>
            <Link
              to="/deposite"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 4 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Deposit
            </Link>
            <Link
              to="/withdraw"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 5 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Withdraw
            </Link>
            <Link
              to="/Bet"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 6 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              Account Settings
            </Link>
            <Link
              to="/Bet"
              className={`text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center ${
                active === 7 &&
                "bg-[#2E2633] rounded-full border-[1px] border-[#FC8623]"
              }`}
            >
              FAQ
            </Link>
          </nav>
          <nav className="flex items-center h-[52px] border-[1px] border-[#3B3D53] rounded-full px-1">
            <Link
              to="/Bet"
              className="text-[#FFFFFF] font-semibold text-[16px] h-[44px] px-4 justify-center flex items-center "
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
