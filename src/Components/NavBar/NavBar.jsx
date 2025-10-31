import { useEffect, useState } from "react";
import Button from "../Button/Button";
import PlaceholderComponent from "../PlaceholderComponent";

const NavBar = () => {
  const [colorMode, setColorMode] = useState(() => {
    const currentMode = localStorage.getItem("color-mode");

    return currentMode === null ? "light" : currentMode;
  });

  useEffect(() => {
    const initialMode = localStorage.getItem("color-mode");
    if (initialMode) {
      initialMode === "light"
        ? document.documentElement.classList.remove("dark-mode")
        : document.documentElement.classList.add("dark-mode");
      console.log(colorMode);
    } else {
      localStorage.setItem("color-mode", "light");
      setColorMode("light");
    }
  }, [colorMode]);

  const toggleDarkMode = () => {
    if (colorMode === "light") {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("color-mode", "dark");
      setColorMode("dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("color-mode", "light");
      setColorMode("light");
    }
  };

  const toggleNavBar = () => {
    const navConents = document.querySelector(".navConents");
    navConents.classList.toggle("active");
  };

  return (
    <nav className="flex items-center px-6 md:px-16 lg:px-24 xl:px-32">
      <PlaceholderComponent />
      <div className="navConents flex items-center gap-8 ml-auto">
        <ul className="navItems flex gap-8 font-medium">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li className="dropDown relative">
            <span>
              <a className="flex gap-2 items-center justify-center direction-row">
                Our Courses <i className="fa-solid fa-chevron-down text-sm"></i>
              </a>
            </span>

            <div className="dropDownContent absolute top-16 p-4">
              <div className="content">
                <a>Course 1</a>
                <a>Course 2</a>
                <a>Course 3</a>
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
          <i className="fa-solid fa-moon"></i>
        </span>
      </div>

      <div className="mobileMenuToggle" onClick={toggleNavBar}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
};

export default NavBar;
