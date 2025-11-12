import { useEffect, useState } from "react";
import { SpinnerDotted } from "spinners-react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearInterval(loading);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="bg-color fixed w-full h-full z-[30000] flex justify-center items-center">
          <SpinnerDotted
            size={80}
            thickness={100}
            speed={100}
            color="#3b82f6"
          />
        </div>
      )}
    </>
  );
};

export default Loader;
