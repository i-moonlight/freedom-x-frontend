import { DepositCard } from "../../components/DepositCard";
import { Header } from "../../components/Header";

export const Deposit = () => {
  return (
    <div className="w-full">
      <Header active={4} page="Deposit" />
      <div className="md:w-[100%]  w-[534px] mx-auto mt-[36px]">
        <DepositCard />
      </div>
    </div>
  );
};
