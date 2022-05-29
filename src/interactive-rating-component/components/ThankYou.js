import "../assets/app.css";
import thankYouSvg from "../assets/illustration-thank-you.svg";

const ThankYou = ({rate}) => {
  return (
      <div className="card rounded-2xl max-w-md p-8 bg-[#1f2630] font-['Overpass'] text-center text-slate-200">
        <img className="mx-auto" src={thankYouSvg} alt="thank-you" />
        <div className="flex justify-center">
          <span className="bg-[#262e38] rounded-full text-[#fb7413] p-1 text-xs m-7 w-1/2">
            You selected {rate} out of 5
          </span>
        </div>
        <h3 className="text-3xl font-bold text-slate-200">Thank you!</h3>
        <p className="text-gray-500 mt-1">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
  );
};

export default ThankYou;
