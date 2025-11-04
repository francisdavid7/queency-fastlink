import { TrendingCoursesData } from "../../Data/TrendingCoursesData";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Slider {...settings}>
        {TrendingCoursesData.map((course, index) => (
          <div
            key={index}
            className="relative h-[250px] rounded-lg overflow-hidden"
          >
            <img src={course.imgUrl} className="w-full h-full object-cover" />
            <div className="t-overlay absolute w-full h-full bg-black/40 top-0 left-0">
              <h2 className="absolute bottom-[10%] left-[10%]  text-xl font-bold">
                {course.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default CourseSlider;
