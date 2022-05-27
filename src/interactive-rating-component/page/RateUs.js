import Rating from "../components/Rating";

const RateUs = () => {
  return (
    <div className="h-screen bg-[#121417]">
      <div className="block max-w-sm h-56 w-56 card bg-[#252D37] rounded-lg">
        <h3>How did we do</h3>
        <p>
          {" "}
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
            <Rating value="1" />
            <Rating value="2" />
            <Rating value="3" />
            <Rating value="4" />
            <Rating value="5" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default RateUs;
