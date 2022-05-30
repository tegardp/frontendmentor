import { useState } from "react";
import LifeExpectancy from "./components/LifeExpectancy";
import LifeTracking from "./components/LifeTracking";
import UserInput from "./components/UserInput";

const LifeCalendarComponent = () => {
  const [date, setDate] = useState([]);
  const [lifeExpectancy, setLifeExpectancy] = useState();
  const [track, setTrack] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const birthValue = await e.target.date_of_birth.value;
      const lifeExpectancy = await e.target.life_expectancy.value;
      setDate([...date, birthValue]);
      setLifeExpectancy(lifeExpectancy);
    } catch (error) {
      console.log(error);
    }
  }

  const addTrack = () => {
    setTrack(track + 1);
  };

  const removeTrack = () => {
    if (track > 1) {
      setTrack(track - 1);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="p-5">
          <UserInput
            date={date}
            lifeExpectancy={lifeExpectancy}
            onHandleSubmit={handleSubmit}
          />
        </div>
        <div className="p-5">
          <LifeTracking track={track} addTrack={addTrack} removeTrack={removeTrack} />
        </div>
      </div>
      <div className="w-3/4">
        <LifeExpectancy lifeExpectancy={lifeExpectancy} dateCollection={date} />
      </div>
    </div>
  );
};

export default LifeCalendarComponent;
