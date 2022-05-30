import { useEffect, useState } from "react";
import UserInput from "./components/UserInput";

const LifeCalendarComponent = () => {
  const [date, setDate] = useState();
  const [lifeExpectancy, setLifeExpectancy] = useState();

  async function handleSubmit(date, life) {
    setDate(date);
    setLifeExpectancy(life);
  };

  useEffect(()=>{
    },[setLifeExpectancy])

  return (
    <div className="flex">
      <div className="w-1/4">
        <UserInput
          date={date}
          lifeExpectancy={lifeExpectancy}
          onHandleSubmit={handleSubmit}
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-2xl font-bold text-center">Life Expectancy</h1>
        <div className="p-5">
            { lifeExpectancy && [...Array(lifeExpectancy).keys()].map((i) => (
                <div className="flex" key={i}>
                    {[...Array(52).keys()].map((j) => (
                        <div className="h-2 w-2border-solid border-2 border-gray-900 m-0.5" key={j}>{[...Array(lifeExpectancy).keys()]}</div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LifeCalendarComponent;
