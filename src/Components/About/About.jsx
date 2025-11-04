import { useState } from "react";
import aboutThumbailImg from "../../assets/Images/about-thumbnail.jpg";
import VideoPlayer from "../Video.jsx/VideoPlayer";
import { motion } from "motion/react";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const displayVideo = () => {
    setShowVideo((prevDisplay) => !prevDisplay);
  };

  const closeVideo = () => {
    setShowVideo((prevDisplay) => !prevDisplay);
  };

  return (
    <section className="section text-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        <span>About</span> Company
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="paragraph mt-5"
      >
        At TechPro ICT Training School, we are committed to empowering
        individuals with practical digital skills that drive innovation and
        career growth. Since our inception, we have trained students,
        entrepreneurs, and professionals in essential ICT fields such as Web
        Development, Graphic Design, Office Applications, UI/UX Design, Digital
        Printing, and Digital Branding.
      </motion.p>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="paragraph my-10"
      >
        Our goal is to bridge the digital skills gap by providing hands-on,
        project-based training delivered by experienced instructors. We believe
        in learning by doing — equipping our students with the confidence and
        competence to thrive in today’s technology-driven world. Whether you’re
        starting a new career or upgrading your skills, TechPro ICT is your
        gateway to a successful digital future.
      </motion.p>

      {!showVideo && (
        <motion.div
          className="relative"
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0
          }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{
            scale: 0.8,
            opacity: 1
          }}
        >
          <img src={aboutThumbailImg} className="block mt-5 rounded-[30px]" />
          <motion.span
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 500 }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-1/2 w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white shadow-[0px_0px_0px_15px_#fff6f675] cursor-pointer"
            onClick={displayVideo}
          >
            <i className="fa-solid fa-play"></i>
          </motion.span>
        </motion.div>
      )}

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
    </section>
  );
};

export default About;
