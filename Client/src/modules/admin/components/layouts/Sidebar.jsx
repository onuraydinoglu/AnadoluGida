import { FaHome, FaCalendarAlt, FaBookOpen, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-white w-72">
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden">
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <div className="bg-[#181825] w-full px-7 py-5 text-white">Anadolu Gıda</div>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-base-content w-64 mt-3 p-4 space-y-2">
            <li className="w-[100%]">
              <Link to="/" className="flex items-center gap-5">
                <FaHome size={20} /> Home
              </Link>
            </li>
            <li>
              <Link to="department" className="flex items-center gap-5">
                <FaBookOpen size={20} /> Department
              </Link>
            </li>
            <li>
              <Link to="/category" className="flex items-center gap-5">
                <FaCalendarAlt size={20} /> category
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
