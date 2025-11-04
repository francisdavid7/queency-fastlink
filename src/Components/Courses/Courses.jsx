import CourseCard from "../CourseCard/CourseCard";
import { motion } from "motion/react";

const Courses = () => {
  return (
    <section className="section lg:mt-0 mt-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="m-auto text-center lg:w-[60%] w-full"
      >
        <h1 className="heading">
          Our <span>Popular</span> Courses
        </h1>
        <p className="paragraph mt-4">
          Choose from our comprehensive range of industry-relevant courses
          designed to help you master in-demand technology skills.
        </p>
      </motion.div>

      <div>
        <CourseCard />
      </div>
    </section>
  );
};

export default Courses;
