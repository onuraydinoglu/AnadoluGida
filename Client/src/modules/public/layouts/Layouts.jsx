import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto py-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
