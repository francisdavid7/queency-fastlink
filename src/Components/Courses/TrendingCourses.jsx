import CourseSlider from "../Slider/CourseSlider";
import { motion } from "motion/react";

const TrendingCourses = () => {
  return (
    <section className="section">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="heading">
          <span>Trending</span> Courses
        </h1>
        <p className="paragraph my-5 mb-10">
          Stay ahead in the digital world with our most sought-after training
          programs. Our trending courses are carefully selected to match today’s
          ICT industry demands and prepare you for real-world opportunities.
          Whether you want to build modern websites, master digital design, or
          grow brands online, these courses will help you gain the practical
          skills that set you apart in the tech space.
        </p>
      </motion.div>

      <CourseSlider />
    </section>
  );
};

export default TrendingCourses;
