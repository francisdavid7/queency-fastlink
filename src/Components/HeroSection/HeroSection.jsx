import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import HeroImg from "../../assets/Images/hero.png";
import VideoPlayer from "../Video.jsx/VideoPlayer";
import { useState } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const displayVideo = () => {
    setShowVideo((prevDisplay) => !prevDisplay);
  };

  const closeVideo = () => {
    setShowVideo((prevDisplay) => !prevDisplay);
  };

  return (
    <section className="section grid grid-cols-1 lg:grid-cols-2 gap-15 items-center relative">
      <div className="grid-background"></div>
      <div className=" z-999">
        <span className="batch px-4 py-2 block w-fit rounded-full">
          🎓 Professional ICT Training
        </span>
        <h1 className="heading text-2xl md:text-3xl lg:text-4xl font-bold mt-6">
          Empower <span>Your Future</span> with
          <span> Expert-Led ICT Courses</span>
        </h1>
        <p className="paragraph mt-4">
          Transform your career with industry-leading ICT courses. Learn
          programming, cybersecurity, data science, cloud computing, and more
          from expert instructors.
        </p>

        <div className="heroBtns flex gap-4 mt-6">
          <Button text="Enroll Now" />
          <button className="transparent no-outline" onClick={displayVideo}>
            <i className="fa-solid fa-play text-[#076ce7]"></i> Watch Demo
          </button>
        </div>

        {showVideo ? (
          <div className="">
            <span
              className="batch p-2 rounded-full z-1111 fixed top-10 lg:right-50 right-7 cursor-pointer block"
              onClick={closeVideo}
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </span>
            <VideoPlayer
              className="fixed flex lg:items-center items-start lg:pt-0 pt-[30%] justify-center w-full h-full bg-black/50 top-0 left-0 z-999"
              src="https://ik.imagekit.io/fhkx5v1dg/movie-20250324-eng_ENpN70rW.mp4?updatedAt=1761987086446"
            />
          </div>
        ) : null}

        <Counter />
      </div>

      <div className="mt-10 lg:mt-0 lg:basis-1/2 md:basis-0 heroImageContainer z-1 relative">
        <img src={HeroImg} width={450} />

        <div className="el flex items-center gap-4 p-4 w-fit rounded-md absolute bottom-0 lg:left-1/2 lg:-translate-x-1/2 bg-color">
          <span className="batch p-2 text-2xl rounded-full flex items-center justify-center">
            <i className="fa-regular fa-circle-check"></i>
          </span>
          <span>
            <p>Certified Programes</p>
            <p className="paragraph">Industry Recognized</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
