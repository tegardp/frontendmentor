import { useState, useEffect } from "react";
import "./assets/style.css";
import ImageDivider from "./assets/images/pattern-divider-desktop.svg";
import ImageDice from "./assets/images/icon-dice.svg";

const AdviceGeneratorApp = () => {
  const [advice, setAdvice] = useState([]);

  const fetchApi = async () => {
    try {
      const url = "https://api.adviceslip.com/advice";
      const response = await fetch(url);
      const json = await response.json();
      setAdvice(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="h-screen bg-[#1f2531] flex justify-center items-center w-full">
      <div className="w-full laptop:w-1/3 relative bg-[#313a49] rounded-xl p-8 text-center font-['Manrope']">
        <h2 className="text-[#53ffab]">
          Advice #{advice.length !== 0 && advice.slip.id}
        </h2>
        <h1 className="mt-3 text-slate-50 font-extrabold text-2xl">
          "{advice.length !== 0 && advice.slip.advice}"
        </h1>
        <img className="my-8 mx-auto" src={ImageDivider} alt="divider" />
        <button
          className="absolute ml-auto left-0 right-0 translate-y-2 mr-auto h-12 w-12 bg-[#53ffab] hover:bg-[#85ffc4] hover:shadow-[0_0_20px_-1px_rgba(133,255,196,1)] hover:shadow-[#85ffc4] rounded-full flex justify-center items-center"
          onClick={() => fetchApi()}
        >
          <img className="scale-75" src={ImageDice} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default AdviceGeneratorApp;
