import { FaHome, FaCalendarAlt, FaBookOpen, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-[#F0F0F0] w-72 border-r border-gray-300 min-h-screen">
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden">
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <div className="w-full text-2xl inter-bold px-7 py-5">
            <Link to="/">Anadolu Gıda</Link>
          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu text-base-content w-64 mt-3 p-4 space-y-2">
            <li className="w-[100%]">
              <Link to="/" className="flex items-center gap-5">
                <FaHome size={20} /> Home
              </Link>
            </li>

            <div className="divider my-2"></div>

            <div className="my-3 ms-3">
              <h2 className="text-xs">Store Managements</h2>
            </div>

            <li>
              <Link to="department" className="flex items-center gap-5">
                <FaBookOpen size={20} /> Department
              </Link>
            </li>
            <li>
              <Link to="/category" className="flex items-center gap-5">
                <FaCalendarAlt size={20} /> Category
              </Link>
            </li>
            <li>
              <Link to="/product" className="flex items-center gap-5">
                <FaClock size={20} /> Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
