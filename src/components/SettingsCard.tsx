"use client";
import { ToggleSwitch } from "flowbite-react";
import { useEffect, useState } from "react";
import copyQr from "../assets/img/copy-qr.svg";
import avatar from "../assets/img/avatar.svg";
import copy from "copy-to-clipboard";
import eye from "../assets/img/eye.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setting } from "../assets/axios/Settings";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import DiscreteSlider from "./DiscreteSlider";

export const SettingsCard = () => {
  const [switch1, setSwitch1] = useState(false);
  const [refCode, setrefCode] = useState("");
  const [password, setPassword] = useState(true);
  const [multiplier, setmultiplier] = useState([]);
  const [OuterData, setOuterData] = useState<any>(null);

  const [multiplierVal, setmultiplierVal] = useState("");
  const notify = () => toast("Copied The Content");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setting.getUser(setmultiplier, setmultiplierVal, setloading, setOuterData);
  }, []);

  const setSettings = (e: any) => {
    if (multiplierVal != "") {
      setloading(true);
      setting.patchUser(multiplierVal, setloading);
    }
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

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
      <div className="md:w-[90%] mx-auto  w-[575px] p-[30px] bg-[#23284F] rounded-[24px] border-[1px] border-[#444869] sm:p-[16px] mb-5">
        <div className="flex items-center justify-center">
          <img src={avatar} alt="" />
        </div>
        <div className="grid grid-cols-2 mt-6 gap-5 ">
          <div>
            <label
              htmlFor="#"
              className="text-[#FFFFFF] text-[17px] mb-2 block"
            >
              First Name
            </label>
            <div className="flex w-full rounded-[12px] border-[1px] border-[#444869] h-[50px] items-center px-3">
              <input
                type="text"
                readOnly
                value={OuterData != null ? OuterData["name"].split(" ")[0] : ""}
                className="bg-[transparent] text-[#EFEFEF] text-[16px] flex-1 w-full outline-none border-0 placeholder:text-[#EFEFEF]"
                placeholder="Jhon"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#FFFFFF] text-[17px] mb-2 block"
            >
              Last Name
            </label>
            <div className="flex w-full rounded-[12px] border-[1px] border-[#444869] h-[50px] items-center px-3">
              <input
                type="text"
                readOnly
                value={OuterData != null ? OuterData["name"].split(" ")[1] : ""}
                className="bg-[transparent] text-[#EFEFEF] text-[16px] flex-1 w-full outline-none border-0 placeholder:text-[#EFEFEF]"
                placeholder="Jhon"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer justify-between">
            <p className="text-[#FFFFFF] font-medium text-[16px]">
              Activate bet Notifications
            </p>
            <ToggleSwitch checked={switch1} onChange={setSwitch1} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 my-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="#"
              className="text-[#FFFFFF] text-[17px] mb-2 block"
            >
              Referral Code
            </label>
            <div className="flex bg-[#171B35] w-full rounded-[12px] border-[1px] border-[#3B3D53] h-[50px] items-center px-3 cursor-pointer">
              <input
                type={password ? "password" : "text"}
                className="bg-[transparent] text-[#CCCCCC] text-[16px] flex-1 w-full outline-none border-0"
                placeholder="Enter address"
                value={refCode}
                onChange={(e) => {
                  setrefCode(e.target.value);
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
                src={copyQr}
                alt=""
                className="cursor-pointer"
                onClick={(e) => {
                  notify();
                  copy(refCode);
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#FFFFFF] text-[17px] mb-2 block"
            >
              Multiplier
            </label>
            {multiplier.length > 0 && (
              <DiscreteSlider
                defaultValue={multiplierVal}
                setmultiplierVal={setmultiplierVal}
              />
            )}

            {/* <div className="flex gap-[10px]">
              {multiplier.map((Each, key) => (
                <div>
                  <input
                    type="radio"
                    id={`radio${key + 1}`}
                    name="multiplier"
                    value={Each}
                    className="hidden radiomultiplier"
                    defaultChecked={multiplierVal == Each}
                  />

                  <label
                    htmlFor={`radio${key + 1}`}
                    onClick={(e) => {
                      console.log(Each);
                      setmultiplierVal(Each);
                    }}
                    className="text-[#CCCCCC] text-[16px]   outline-none  flex bg-[#171B35] w-[50px] rounded-[12px] border-[1px] border-[#3B3D53] h-[50px]  items-center justify-center cursor-pointer"
                  >
                    {Each}x
                  </label>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <button
          className="text-[#FFFFFF] tect-[16px] w-full h-[49px] bg-[#3958FF]  rounded-[12px]"
          onClick={setSettings}
        >
          Save Changes
        </button>
      </div>
      <button className="text-[#fff] font-semibold text-[16px] w-[249px] h-[49px] border-[1px] border-[#EB5757] rounded-[12px] absolute left-1/2 -translate-x-1/2 bottom-5 skipbutton md:w-[90%] sm:static sm:translate-x-0 sm:mx-auto sm:mb-7 sm:block">
        Delete Account
      </button>
    </div>
  );
};
