import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/google.svg";
import placeholder from "../../assets/img/video-placeholder.svg";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { account } from "../../assets/axios/Account";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
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
      <div className="w-[90%] max-w-[1158px] p-[30px] bg-[#23284F] rounded-[24px] grid grid-cols-[1fr_601px] gap-6 items-center border-[1px] border-[#444869] 1lg:grid-cols-1 sm:p-4">
        <div className="sm:flex sm:flex-col sm:items-center">
          <img src={logo} alt="" />
          <h1 className="text-[30px] md:text-center mt-8 font-bold text-[#EFEFEF]">
            Welcome to Freedom X
          </h1>
          <p className="text-[#EFEFEF] p-login sm:text-center text-[17px] mt-5 mb-8">
            We create returns for your money using Sports Betting, in a
            transparent and analytical way. This is not leasure nor gambling.
          </p>

          <div className="relative">
            <GoogleOAuthProvider clientId="1615663126-la4qosnrjjn1f34h9q518vqdidcj3a7f.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                  setloading(true);
                  account.loginUser(
                    credentialResponse["credential"],
                    setloading,
                    navigate
                  );
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>

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
