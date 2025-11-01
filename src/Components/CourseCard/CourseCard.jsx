import { coursesData } from "../../Data/CoursesData";
import Button from "../Button/Button";

const CourseCard = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
      {coursesData.map((course) => (
        <div className="card p-6 rounded-lg" key={course.id}>
          <img
            className="rounded-lg mb-5 w-full h-[180px] object-cover"
            src={course.image}
          />

          <div className="flex justify-between">
            <div className="batch w-fit py-1 px-2 rounded-full text-sm">
              {course.level}
            </div>

            <div className="flex items-center gap-1">
              <i className="fa-solid fa-star text-sm text-yellow-400"></i>
              {course.rating}
            </div>
          </div>
          <div className="batch colored w-fit py-1 px-2 rounded-full text-sm mt-2">
            {course.category}
          </div>

          <h3 className="my-4 font-bold">{course.title}</h3>
          <p className="paragraph">{course.description}</p>

          <div className="mt-3 flex gap-6">
            <span className="flex gap-2 items-center">
              <i className="paragraph fa-regular fa-clock"></i>
              <p className="paragraph">{course.duration}</p>
            </span>

            <span className="flex gap-2">
              <i className="paragraph fa-solid fa-user-group"></i>
              <p className="paragraph">{course.students}</p>
            </span>
          </div>

          <div className="flex justify-between mt-3">
            <span className="batch text-sm py-2 px-3 rounded-full">
              {course.price}
            </span>

            <Button text="Enroll Now" className="text-[13px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
