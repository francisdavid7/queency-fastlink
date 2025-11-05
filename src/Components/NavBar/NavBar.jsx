import Button from "../Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import AboutUs from "../../Pages/AboutUs";
import { coursesData } from "../../Data/CoursesData";
import { Link } from "react-router";

const NavBar = () => {
  const { colorMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleNavBar = () => {
    const navConents = document.querySelector(".navConents");
    navConents.classList.toggle("active");
  };

  return (
    <nav className="flex items-center px-6 md:px-16 lg:px-24 xl:px-32">
      <Link to="/">
        <img
          src={colorMode === "light" ? "./logo-light.png" : "./logo-dark.png"}
          width={150}
        />
      </Link>
      <div className="navConents flex items-center gap-8 ml-auto">
        <ul className="navItems flex gap-8 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="dropDown relative">
            <span>
              <a className="flex gap-2 items-center justify-center direction-row">
                Our Courses <i className="fa-solid fa-chevron-down text-sm"></i>
              </a>
            </span>

            <div className="dropDownContent absolute top-16 p-4">
              <div className="content">
                {coursesData.map((data, index) => (
                  <a key={index}>{data.title}</a>
                ))}
              </div>
            </div>
          </li>
        </ul>
        <div className="headerBtns ml-auto flex gap-2">
          <Button className="transparent ml-auto" text="Login" />
          <Button text="Get Started" />
        </div>
      </div>

      <div className="ml-auto">
        <span className="darkModeIcon" onClick={toggleDarkMode}>
          <i
            className={
              colorMode === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }
          ></i>
        </span>
      </div>

      <div className="mobileMenuToggle" onClick={toggleNavBar}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
};

export default NavBar;
