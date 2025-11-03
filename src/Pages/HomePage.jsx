import HeroSection from "../Components/HeroSection/HeroSection";
import Courses from "../Courses/Courses";
import "../App.css";
import About from "../Components/About/About";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Courses />
      <About />
    </>
  );
};

export default HomePage;
