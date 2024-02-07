import { DepositeCard } from "../../components/DepositeCard";
import { Header } from "../../components/Header";

export const Deposite = () => {
  return (
    <div className="w-full">
      <Header active={4} page="Deposite" />
      <div className="md:w-[100%]  w-[534px] mx-auto mt-[36px]">
        <DepositeCard />
      </div>
    </div>
  );
};
