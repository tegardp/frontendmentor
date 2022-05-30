import React from "react";

const LifeExpectancy = ({lifeExpectancy}) => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold text-center">Life Expectancy</h1>
      <div className="p-5">
        {lifeExpectancy &&
          [...Array(parseInt(lifeExpectancy)).keys()].map((i) => (
            <div className="flex justify-center" key={i}>
              {[...Array(52).keys()].map((j) => (
                <div
                  className="h-2 w-2 border-solid border-2 border-gray-900 m-0.5"
                  key={j}
                  id={`square-${i}-${j}`}
                ></div>
              ))}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default LifeExpectancy;
