import StatsIndicator from "./StatsIndicator";

const Counter = () => {
  return (
    <div className="counter flex mt-8">
      <div>
        <StatsIndicator counts={1000} countType="+" />
        <p className="paragraph">Students Trained</p>
      </div>

      <div className="lg:mx-6 lg:px-6 mx-2 px-2 border-l border-r">
        <StatsIndicator counts={50} countType="+" />
        <p className="paragraph">Expert Instructors</p>
      </div>

      <div>
        <StatsIndicator counts={90} countType="%" />
        <p className="paragraph">Success Rate</p>
      </div>
    </div>
  );
};

export default Counter;
