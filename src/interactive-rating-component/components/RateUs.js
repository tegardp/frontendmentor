import "../assets/app.css";
import iconStar from "../assets/icon-star.svg";

const RateUs = ({rate, handleClick, redirectToPage}) => {
  return (
    <div className="card rounded-2xl max-w-md p-8 bg-[#1f2630] font-['Overpass'] text-slate-200">
      <div className="h-14 w-14 bg-[#262e38] rounded-full flex items-center justify-center">
        <img src={iconStar} alt="star" />
      </div>
      <h3 className="mt-6 text-3xl font-bold text-slate-200">How did we do?</h3>
      <p className="text-gray-500 mt-1">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-5 mb-5">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            className={`h-1 w-1 p-8 text-xl text-[#6e7780] font-bold text-white-200 bg-[#262e38] hover:bg-[#fb7413] hover:text-slate-50 rounded-full flex items-center justify-center ${
              value === rate ? "bg-[#7c8798] text-slate-50" : ""
            }`}
            onClick={() => handleClick(value)}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        className="bg-[#fb7413] w-full rounded-full text-slate-50 hover:bg-slate-50 hover:text-[#fb7413] font-bold py-3"
        onClick={() => (rate ? redirectToPage() : null)}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RateUs;
