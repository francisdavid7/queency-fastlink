import { Route, Routes, useLocation } from "react-router";
// import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Context/ThemeContext";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignupForm from "./Components/Forms/SignUpForm";
import PageNotFound from "./Pages/PageNotFound";
import StudentDashboard from "./Pages/Dashboard/StudentDashboard";
import Loader from "./Components/Loader";
import { MenuProvider } from "./Context/MenuContext";

function App() {
  const location = useLocation();

  const hideNavBarRoutes = ["/dashboard", "/register", "/login"];

  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      <Loader />
      <MenuProvider>
        <ThemeProvider>
          {!shouldHideNavBar && <NavBar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {!shouldHideNavBar && <Footer />}
        </ThemeProvider>
      </MenuProvider>
      {/* <Analytics /> */}
    </>
  );
}

export default App;
