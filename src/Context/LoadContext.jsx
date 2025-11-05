// import { createContext, useState, useEffect } from "react";

// export const LoadContext = createContext();

// export const LoadProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <LoadContext.Provider value={{ isLoading, setIsLoading }}>
//       {children}
//     </LoadContext.Provider>
//   );
// };
