import CourseSlider from "../Slider/CourseSlider";

const TrendingCourses = () => {
  return (
    <section className="section">
      <h1 className="heading text-center">
        <span>Trending</span> Courses
      </h1>
      <p className="paragraph text-center my-5 mb-10">
        Stay ahead in the digital world with our most sought-after training
        programs. Our trending courses are carefully selected to match today’s
        ICT industry demands and prepare you for real-world opportunities.
        Whether you want to build modern websites, master digital design, or
        grow brands online, these courses will help you gain the practical
        skills that set you apart in the tech space.
      </p>

      <CourseSlider />
    </section>
  );
};

export default TrendingCourses;
