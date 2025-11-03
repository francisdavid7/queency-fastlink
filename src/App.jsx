import { Route, Routes } from "react-router";
// import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      {/* <Analytics /> */}
    </>
  );
}

export default App;
