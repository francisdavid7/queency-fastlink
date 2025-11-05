import { Route, Routes } from "react-router";
// import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Context/ThemeContext";
import AboutUs from "./Pages/AboutUs";
import { SpinnerDotted } from "spinners-react";
import { useEffect, useState } from "react";

function App() {
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
        <div className="bg-color fixed w-full h-full z-[1000] flex justify-center items-center">
          <SpinnerDotted
            size={50}
            thickness={100}
            speed={100}
            color="#3b82f6"
          />
        </div>
      )}
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </ThemeProvider>
      {/* <Analytics /> */}
    </>
  );
}

export default App;
