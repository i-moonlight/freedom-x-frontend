import { useNavigate } from "react-router-dom";
import { DepositCard } from "../../components/DepositCard";
export const DepositNew = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] Deposit py-3 w-full flex items-center justify-center">
      <div className="w-full">
        <DepositCard logoCustom />
      </div>
      <button
        className="text-[#fff] font-semibold text-[16px] w-[134px] h-[49px] border-[1px] border-[#3958FF] rounded-[12px] absolute bottom-5 skipbutton"
        onClick={(e) => {
          navigate("/bet");
        }}
      >
        Skip
      </button>
    </div>
  );
};
