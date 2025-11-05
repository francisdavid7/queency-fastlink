import { Route, Routes } from "react-router";
// import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
      {/* <Analytics /> */}
    </>
  );
}

export default App;
