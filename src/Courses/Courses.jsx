import CourseCard from "../Components/CourseCard/CourseCard";

const Courses = () => {
  return (
    <section className="section lg:mt-0 mt-10">
      <div className="m-auto text-center lg:w-[60%] w-full">
        <h1 className="heading lg:text-3xl md:text-2xl text-xl font-bold">
          Our <span>Popular</span> Courses
        </h1>
        <p className="paragraph mt-4">
          Choose from our comprehensive range of industry-relevant courses
          designed to help you master in-demand technology skills.
        </p>
      </div>

      <div>
        <CourseCard />
      </div>
    </section>
  );
};

export default Courses;
