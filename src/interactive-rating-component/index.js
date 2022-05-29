import "./assets/app.css";
import ThankYou from "./components/ThankYou";
import { useState } from "react";
import RateUs from "./components/RateUs";

const InteractiveRatingComponentPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [rate, setRate] = useState();

  const redirectToPage = () => setRedirect(true);

  const handleClick = (value) => setRate(value);

  return (
    <div className="h-screen bg-[#121417] flex justify-center items-center">
      {redirect ? (
        <ThankYou rate={rate} />
      ) : (
        <RateUs rate={rate} handleClick={handleClick} redirectToPage={redirectToPage}/>
      )}
    </div>
  );
};

export default InteractiveRatingComponentPage;
