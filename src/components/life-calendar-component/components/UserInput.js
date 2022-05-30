import React from "react";

const UserInput = ({ date, lifeExpectancy, onHandleSubmit }) => {
  return (
    <React.Fragment>
      <h2 className="font-bold text-xl text-center">User Profile</h2>
      <form
        onSubmit={(e) => {
          onHandleSubmit(e);
        }}
      >
        <label
          htmlFor="date-of-birth"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Date of Birth
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
            @
          </span>
          <input
            id="date-of-birth"
            name="date_of_birth"
            placeholder="Birth Day"
            type="date"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500  focus:border-blue-500 block flex-1 min-2-0 w-full text-sm border-gray-300 p-2.5"
            onChange={(e) => e.preventDefault()}
          />
        </div>
        <label htmlFor="life-expectancy">Life Expectancy</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-xs text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
            123
          </span>
          <input
            id="life-expectancy"
            name="life_expectancy"
            placeholder="Life Expectancy"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500  focus:border-blue-500 block flex-1 min-2-0 w-full text-sm border-gray-300 p-2.5"
            onChange={(e) => e.preventDefault()}
          />
        </div>

        <button className="w-full bg-green-500 py-1 rounded-lg text-center font-bold text-gray-900 my-4" type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
