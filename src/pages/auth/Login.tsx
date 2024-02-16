import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/google.svg";
import placeholder from "../../assets/img/video-placeholder.svg";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  function getCookie(name: any) {
    const value = `; ${document.cookie}`;

    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts?.pop()?.split(";").shift();

    return null;
  }

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[90%] max-w-[1158px] p-[30px] bg-[#23284F] rounded-[24px] grid grid-cols-[1fr_601px] gap-6 items-center border-[1px] border-[#444869] 1lg:grid-cols-1 sm:p-4">
        <div className="sm:flex sm:flex-col sm:items-center">
          <img src={logo} alt="" />
          <h1 className="text-[30px] md:text-center mt-8 font-bold text-[#EFEFEF]">
            Welcome to Bet History
          </h1>
          <p className="text-[#EFEFEF] sm:text-center text-[17px] mt-5 mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div
            id="g_id_onload"
            data-client_id="1615663126-la4qosnrjjn1f34h9q518vqdidcj3a7f.apps.googleusercontent.com"
            data-login_uri="https://freedom-x.co/login"
          ></div>

          <button className="flex items-center gap-2 w-[215px] h-[45px] bg-[#171B35] border-[2px] border-[#3958FF] text-[#EFEFEF] justify-center rounded-full text-[17px] sm:w-full">
            <img src={google} alt="" />
            Sign in with Google
          </button>
        </div>
        <img src={placeholder} alt="" className="w-full" />
      </div>
    </div>
  );
};
