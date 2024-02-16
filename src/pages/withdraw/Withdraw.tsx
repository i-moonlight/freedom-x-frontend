import { useState } from "react";
import { ConfimWithdraw } from "../../components/ConfimWithdraw";
import { ErrorWithdraw } from "../../components/ErrorWithdraw";
import { Header } from "../../components/Header";
import { WithdrawCard } from "../../components/WithdrawCard";

export const Withdraw = () => {
  const [done, setDone] = useState([null]);

  return (
    <div className="w-full">
      <Header active={5} page="Withdraw" />
      <div className="md:w-[100%]  w-[534px] mx-auto mt-[36px]">
        <WithdrawCard setDone={setDone} done={done} />
        {done[0] === true && <ConfimWithdraw message={done[1]} />}
        {done[0] === false && <ErrorWithdraw message={done[1]} />}
      </div>
    </div>
  );
};
