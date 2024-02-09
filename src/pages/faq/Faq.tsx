import { Header } from "../../components/Header";

import { FaqOver } from "../../components/FaqOver";

export const Faq = () => {
  return (
    <div className="w-full">
      <Header active={7} page="Faq" />
      <div className="md:w-[90%]  w-[692px] mx-auto mt-[36px]">
        <h1 className="text-[32px] text-center font-semibold text-[#fff] mb-[16px]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#fff] text-center text-[14px] mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
        <ul className="flex flex-col gap-4">
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
          <FaqOver />
        </ul>
      </div>
    </div>
  );
};
