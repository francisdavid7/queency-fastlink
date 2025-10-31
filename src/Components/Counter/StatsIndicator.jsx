import { useEffect, useState } from "react";

const StatsIndicator = ({ counts, countType }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < counts) {
        setCount((prevCount) => prevCount + 5);
      }
    }, 10000 / counts);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <h4>
      {count}
      {countType}
    </h4>
  );
};

export default StatsIndicator;
