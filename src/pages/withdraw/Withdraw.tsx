import { Header } from "../../components/Header";
import { WithdrawCard } from "../../components/WithdrawCard";

export const Withdraw = () => {
  return (
    <div className="w-full">
      <Header active={5} page="Withdraw" />
      <div className="md:w-[100%]  w-[534px] mx-auto mt-[36px]">
        <WithdrawCard />
      </div>
    </div>
  );
};
