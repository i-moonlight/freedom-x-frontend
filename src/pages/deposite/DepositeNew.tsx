import { useNavigate } from "react-router-dom";
import { DepositeCard } from "../../components/DepositeCard";
export const DepositeNew = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] Deposite py-3 w-full flex items-center justify-center">
      <div className="w-full">
        <DepositeCard logoCustom />
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
