import IllustrationHero from "./assets/images/illustration-hero.svg";
import IconMusic from "./assets/images/icon-music.svg";

import "./assets/style.css";

const OrderSummaryComponent = () => {
  return (
    <div className="h-screen bg-[#e0e8ff] xs:bg-[url('./components/order-summary-component-main/assets/images/pattern-background-desktop.svg')] bg-[url('./components/order-summary-component-main/assets/images/pattern-background-mobile.svg')] bg-no-repeat flex justify-center items-center">
      <div className="max-w-sm">
        <img
          className="w-full rounded-t-xl shadow-md"
          src={IllustrationHero}
          alt="illustration-hero"
        />
        <div className="bg-white p-8 rounded-b-xl shadow-md">
          <h1 className="text-xl font-bold text-center text-gray-900">
            Order Summary
          </h1>
          <p className="text-center text-gray-500 my-2">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex justify-between my-6 px-4">
            <div className="flex gap-4">
              <img className="self-center" src={IconMusic} alt="music" />
              <div className="self-center flex flex-col">
                <span className="font-bold text-gray-700 text-sm">Annual Plan</span>
                <span className="text-gray-500 text-sm">$59.99/year</span>
              </div>
            </div>
            <button className="font-bold text-[#766cf1] hover:text-[#9f98f5]">Change</button>
          </div>
          <div className="flex flex-col mt-7">
            <button className="bg-[#766cf1] hover:bg-[#9f98f5] text-slate-50 rounded-md p-2 shadow-xl">Proceed to Payment</button>
            <button className="text-gray-700 hover:text-gray-500 font-bold mt-4">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
