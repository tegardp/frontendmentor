import "./assets/style.css";
import imageAvatar from "./assets/images/image-avatar.png";
import imageCard from "./assets/images/image-equilibrium.jpg";
import iconEthereum from "./assets/images/icon-ethereum.svg";
import iconClock from "./assets/images/icon-clock.svg";

const NFTPreviewCardComponent = () => {
  return (
    <div className="h-screen bg-[#0d192b] flex justify-center items-center">
      <div className="rounded-xl max-w-sm bg-[#14253d] p-6 font-['Outfit']">
        <img className="rounded-lg" src={imageCard} alt="nft" />
        <div>
          <h4 className="mt-6 text-2xl font-semibold text-[#00fff7]">
            Equilibrium #3429
          </h4>
        </div>
        <p className="mt-4 text-lg text-[#8bacda] font-light">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="my-4 flex w-full justify-between">
          <span>
            <img
              className="inline align-middle"
              src={iconEthereum}
              alt="eth-logo"
            />
            <span className="align-middle text-[#00fff7] text-lg font-normal">
              {" "}
              0.041ETH
            </span>
          </span>
          <span>
            <img className="inline align-middle" src={iconClock} alt="clock" />
            <span className="text-[#8bacda] text-md align-middle">
              {" "}
              3 days left
            </span>
          </span>
        </div>
        <hr />
        <div className="mt-5 mb-1">
          <img
            className="h-10 inline round border-solid border rounded-full"
            src={imageAvatar}
            alt="avatar"
          />
          <span className="ml-3 text-md text-[#8bacda]">
            Creation of <span className="text-[#00fff7]">Jules Wyvern</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NFTPreviewCardComponent;
