import DashboardContent from "../../Components/DashboardComps/DashboardContent";
import Sidebar from "../../Components/DashboardComps/Sidebar";
import { useMenuContext } from "../../Context/MenuContext";

const StudentDashboard = () => {
  const { activeMenu, setActiveMenu } = useMenuContext();
  return (
    <section className="min-h-screen dashboard lg:grid grid-cols-5">
      <Sidebar />
      {activeMenu && (
        <div
          onClick={() => setActiveMenu((prev) => !prev)}
          className="fixed w-full h-full backdrop-blur-[5px] bg-black/10 top-0 z-9"
        />
      )}
      <DashboardContent />
    </section>
  );
};

export default StudentDashboard;
