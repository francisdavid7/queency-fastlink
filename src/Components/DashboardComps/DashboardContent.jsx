import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { MdOutlineHomeWork } from "react-icons/md";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Card from "../../Components/CourseCard/Card";
import ThemedDatePicker from "../../Components/Calendar";
import { useMenuContext } from "../../Context/MenuContext";

import { Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from "../../Data/ChartData";
import Charts from "../Charts/Charts";

const DashboardContent = () => {
  const { colorMode, toggleDarkMode } = useContext(ThemeContext);

  const { setActiveMenu } = useMenuContext();

  return (
    <main className="lg:col-span-4 lg:absolute lg:w-[80%] lg:right-0 w-full">
      {/* Main contents header */}
      <div className="sticky top-0 surface-color flex items-center p-5.5 border-color border-b">
        <span
          onClick={() => setActiveMenu(true)}
          className="lg:hidden text-xl mr-5 cursor-pointer"
        >
          <RiMenu2Line />
        </span>

        <h1 className="heading text-2xl font-bold">
          Hello, <span>Francis!</span>
        </h1>

        <div className="flex ml-auto gap-2">
          <div className="batch w-fit p-2 rounded-full cursor-pointer">
            <IoMdNotificationsOutline />
          </div>
          <div
            className="batch w-fit p-2 rounded-full cursor-pointer"
            onClick={toggleDarkMode}
          >
            {colorMode === "light" ? (
              <MdOutlineDarkMode />
            ) : (
              <MdOutlineLightMode />
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:p-6 p-8 gap-4 overflow-y-auto">
        <div className="col-span-2">
          <h2 className="heading text-xl font-bold">
            Your <span>Courses</span>
          </h2>

          {/* Courses slide */}
          <div className="mt-5 flex gap-2 overflow-auto">
            <Card
              title="Web Development"
              tutor="Francis David"
              level="Beginner to Advanced"
              className="shrink-0"
            />
            <Card
              title="Web Development"
              tutor="Francis David"
              level="Beginner to Advanced"
              className="shrink-0"
            />
          </div>

          {/* Analytics */}
          <div className="mt-6">
            <div className="bg-color p-6 rounded-lg">
              <Charts />
            </div>
          </div>
        </div>

        <article className="">
          <div className="w-fit">
            <ThemedDatePicker />
          </div>

          <div className="mt-5 flex flex-col gap-2.5 rounded-lg">
            <li className="bg-color p-6 flex items-center rounded-md gap-2.5">
              <span className="batch p-2 py-4 rounded-lg text-lg">
                <MdOutlineAssignment />
              </span>
              <div>
                <h2>Submitted Assignment</h2>
                <p className="paragraph">03:15pm</p>
              </div>
            </li>

            <li className="bg-color p-6 flex items-center rounded-md gap-2.5">
              <span className="batch p-2 py-4 rounded-lg text-lg">
                <MdEventNote />
              </span>

              <div>
                <h2>Upcoming Events</h2>
                <p className="paragraph">03:15pm</p>
              </div>
            </li>

            <li className="bg-color p-6 flex items-center rounded-md gap-2.5">
              <span className="batch p-2 py-4 rounded-lg text-lg">
                <CiTimer />
              </span>
              <div>
                <h2>Until Next Test</h2>
                <p className="paragraph">(22-04-25) - 03:15pm</p>
              </div>
            </li>

            <li className="bg-color p-6 flex items-center rounded-md gap-2.5">
              <span className="batch p-2 py-4 rounded-lg text-lg">
                <MdOutlineHomeWork />
              </span>
              <div>
                <h2>Home Work</h2>
                <p className="paragraph">03:15pm</p>
              </div>
            </li>
          </div>
        </article>
      </div>
    </main>
  );
};

export default DashboardContent;
