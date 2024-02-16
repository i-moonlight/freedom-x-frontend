import info from "../assets/img/info.svg";
import lineimg from "../assets/img/line.svg";
import pieImg from "../assets/img/pie.svg";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect } from "react";
export const PerformanceBox = ({
  heading,
  number,
  line = null,
  pie = null,
  bar = null,
  chartsData = null,
}: any) => {
  let options: ApexOptions = {};
  if (chartsData != null) {
    options = {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      colors: ["#3958FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: chartsData["XAxis"],
        labels: {
          style: {
            colors: "#CCCCCC",
            fontSize: "14px",
            cssClass: "Manrope",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: "#CCCCCC",
            fontSize: "14px",
            cssClass: "Manrope",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Compound Profit";
          },
        },
      },
    };
  }

  return (
    <div
      className={`px-5 relative py-3 rounded-[12px]  bg-[#23284F] border-[1px] border-[#444869] ${
        bar && "!pb-0"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#CCCCCC]  relative inline-flex items-center gap-2 text-[16px] font-bold">
            {heading}
            <img src={info} alt="" className="info-area cursor-pointer" />
            <span className="text-[14px] font-medium text-[#EFEFEF] bg-[#3958FF] p-[10px] rounded-[12px] block absolute w-[260px] transition-all top-[100%] right-0 z-10 opacity-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </h1>

          <p className="text-[#EFEFEF] font-bold text-[30px] mt-2 md:text-[20px]">
            {number}
          </p>
        </div>
        {line === 1 && <img src={lineimg} alt="" />}
        {pie === 1 && <img src={pieImg} alt="" />}
      </div>
      {bar === 1 && (
        <ReactApexChart
          options={options}
          series={[
            {
              name: "Compound Profit",
              data: chartsData["YAxis"],
            },
          ]}
          type="bar"
          height={268}
        />
      )}
    </div>
  );
};
