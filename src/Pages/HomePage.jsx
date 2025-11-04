import HeroSection from "../Components/HeroSection/HeroSection";
import Courses from "../Components/Courses/Courses";
import "../App.css";
import About from "../Components/About/About";
import TrendingCourses from "../Components/Courses/TrendingCourses";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Courses />
      <About />
      <WhyChooseUs />
      <TrendingCourses />
    </>
  );
};

export default HomePage;
