import { Route, Routes } from "react-router";
// import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Analytics /> */}
    </>
  );
}

export default App;
