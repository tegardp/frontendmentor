import { useEffect, useState } from "react";
import UserInput from "./components/UserInput";

const LifeCalendarComponent = () => {
  const [date, setDate] = useState();
  const [lifeExpectancy, setLifeExpectancy] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const birthValue = await e.target.date_of_birth.value;
    const lifeExpectancy = await e.target.life_expectancy.value;
    setDate(birthValue);
    setLifeExpectancy([...Array(lifeExpectancy).keys()]);
  }

  useEffect(() => {
    setLifeExpectancy(lifeExpectancy);
  }, [lifeExpectancy]);

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
          {lifeExpectancy &&
            lifeExpectancy.map((i) => (
              <div className="flex" key={i}>
                {[...Array(52).keys()].map((j) => (
                  <div
                    className="h-2 w-2border-solid border-2 border-gray-900 m-0.5"
                    key={j}
                  >
                    {lifeExpectancy}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LifeCalendarComponent;
