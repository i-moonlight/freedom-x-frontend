import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MonthDropdown } from "../../components/MonthDropdown";

import { PerformanceBox } from "../../components/PerformanceBox";
import { analytics } from "../../assets/axios/Analytics";
import { account } from "../../assets/axios/Account";

export const Analytics = () => {
  const [chartsData, setchartsData] = useState(null);
  const [loading, setloading] = useState(true);
  const [anayticsHistoryData, setanayticsHistoryData] = useState<any>(null);
  const [analyticsData, setanalyticsData] = useState({
    compound_return: "0",
    largest_drawdown: "0",
    monthly_return: "0",
    montly_sharpe_ratio: "",
    winning_bets_ratio: "0",
    yearly_return: "0",
  });
  useEffect(() => {
    analytics.getAnalyticsData(setanalyticsData, setloading);
    account.getAccountMoreDetails(setchartsData, setloading);
    let balance = JSON.parse(window.localStorage.getItem("balance") || "{}");
    setanayticsHistoryData(balance);
  }, []);

  return (
    <div className="w-full">
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
            <PerformanceBox
              heading="Average Monthly Return"
              hoverData="The average return on investment per month over the selected period."
              number={`${Number(
                Number(analyticsData.monthly_return) * 100
              ).toFixed(anayticsHistoryData?.symbol == "USDT" ? 2 : 8)}%`}
            />
            <PerformanceBox
              heading="Sharpe Ratio"
              hoverData="A measure of risk-adjusted return. Higher values indicate better performance. Calculated monthly."
              number={`${
                analyticsData.montly_sharpe_ratio == null
                  ? "N/A"
                  : analyticsData.montly_sharpe_ratio
              }`}
            />
            <PerformanceBox
              heading="Largest Drawdown"
              hoverData="The largest peak-to-trough decline in the value of the fund over the selected period."
              number={`${Number(
                Number(analyticsData.largest_drawdown) * 100
              ).toFixed(anayticsHistoryData?.symbol == "USDT" ? 2 : 8)}%`}
            />
            <PerformanceBox
              heading="Winning bets %"
              hoverData="The percentage of bets that resulted in a profit over the selected period."
              number={`${Number(
                Number(analyticsData.winning_bets_ratio) * 100
              ).toFixed(anayticsHistoryData?.symbol == "USDT" ? 2 : 8)}%`}
            />
            <PerformanceBox
              heading="Compound Return"
              hoverData="The overall return on investment when gains are reinvested, calculated over the selected period."
              number={`${Number(
                Number(analyticsData.compound_return) * 100
              ).toFixed(anayticsHistoryData?.symbol == "USDT" ? 2 : 8)}%`}
            />
            <PerformanceBox
              heading="Annualised Return"
              hoverData="The average return on investment per year over the selected period."
              number={`${Number(
                Number(analyticsData.yearly_return) * 100
              ).toFixed(anayticsHistoryData?.symbol == "USDT" ? 2 : 8)}%`}
            />
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
              <PerformanceBox
                heading="PnL"
                number={`${
                  anayticsHistoryData != null &&
                  Number(anayticsHistoryData.pnl).toFixed(
                    anayticsHistoryData?.symbol == "USDT" ? 2 : 8
                  )
                } ${anayticsHistoryData != null && anayticsHistoryData.symbol}`}
                line={1}
                hoverData="Absolute Profit (or Loss) for the account over the selected period."
              />
              <PerformanceBox
                heading="PnL (%)"
                number="+30.45%"
                pie={1}
                hoverData="Profit or Loss as a percentage of the total balance for the selected period"
              />
              <PerformanceBox heading="PnL (%)" number="+30.45%" pie={1} />
            </div>
            {chartsData && (
              <PerformanceBox
                chartsData={chartsData}
                heading="Compound Profit"
                number=""
                bar={1}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
