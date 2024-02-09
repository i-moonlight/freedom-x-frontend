import { Header } from "../../components/Header";
import { MonthDropdown } from "../../components/MonthDropdown";

import { PerformanceBox } from "../../components/PerformanceBox";
export const Analytics = () => {
  return (
    <div className="w-full">
      <Header active={2} page="Analytics" />

      <div className="1lg:w-[90%] md:flex md:gap-[30px] md:flex-col-reverse  w-[1140px] mx-auto  mt-[36px] mb-[60px]">
        <div className="p-[30px] rounded-[24px] bg-[#171B35] border-[1px] border-[#31354C] sm:p-4 relative">
          <div className="flex items-center justify-between">
            <h1 className="text-[#FFFFFF] md:text-[18px] font-bold text-[25px]">
              Overall Performance
            </h1>
            <MonthDropdown />
          </div>
          <div className="grid grid-cols-3  mt-4 gap-4 lg:grid-cols-2 md:!grid-cols-1">
            <PerformanceBox heading="Average Monthly Return" number="13.54%" />
            <PerformanceBox heading="Sharp Ratio" number="1.81" />
            <PerformanceBox heading="Largest Drawdown" number="0.00%" />
            <PerformanceBox heading="Winning bets %" number="54.6%" />
            <PerformanceBox heading="Compound Return " number="86.4%" />
            <PerformanceBox heading="Annualised Return" number="349.29%" />
          </div>
        </div>
        <div className="p-[30px] mt-[30px] md:mt-0 rounded-[24px] bg-[#171B35] border-[1px] border-[#31354C] sm:p-4 relative">
          <div className="flex items-center justify-between">
            <h1 className="text-[#FFFFFF] md:text-[18px] font-bold text-[25px]">
              Account stats
            </h1>
            <MonthDropdown />
          </div>
          <div className="grid grid-cols-[357px_1fr] lg:grid-cols-1  mt-4 gap-4">
            <div className="flex flex-col gap-4">
              <PerformanceBox heading="PnL" number="+60 USDT" line={1} />
              <PerformanceBox heading="PnL (%)" number="+30.45%" pie={1} />
              <PerformanceBox heading="PnL (%)" number="+30.45%" pie={1} />
            </div>
            <PerformanceBox heading="Compound Profit" number="" bar={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
