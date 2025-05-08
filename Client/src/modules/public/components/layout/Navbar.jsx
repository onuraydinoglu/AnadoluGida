import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-[#E9E9E9] shadow-md z-50 relative">
      <div className="container mx-auto flex">
        {/* SOL */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/product">Ürünler</Link>
              </li>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl">
            Anadolu Gıda
          </Link>
        </div>

        {/* ORTA */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {/* <li className="relative group">
              <details>
                <summary>Produkte</summary>

                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[900px] bg-base-300 p-6 rounded-box shadow grid grid-cols-3 gap-8 z-50">
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">
                      Milchprodukte, Brot & Eier
                    </h3>
                    <ul>
                      <li>
                        <a>Butter</a>
                      </li>
                      <li>
                        <a>Milchgetränke</a>
                      </li>
                      <li>
                        <a>Quark & Joghurt</a>
                      </li>
                      <li>
                        <a>Eier</a>
                      </li>
                      <li>
                        <a>Brötchen & Backwaren</a>
                      </li>
                      <li>
                        <a>Käse</a>
                      </li>
                      <li>
                        <a>Kondensmilch</a>
                      </li>
                      <li>
                        <a>Milchprodukte</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">
                      Erfrischungsgetränke & Säfte
                    </h3>
                    <ul>
                      <li>
                        <a>Softdrinks</a>
                      </li>
                      <li>
                        <a>Fruchtsäfte</a>
                      </li>
                      <li>
                        <a>Coldpress</a>
                      </li>
                      <li>
                        <a>Wasser & Eiswürfel</a>
                      </li>
                      <li>
                        <a>Limonade & Mixer</a>
                      </li>
                      <li>
                        <a>Gesundheitsdrinks</a>
                      </li>
                      <li>
                        <a>Kräutergetränke</a>
                      </li>
                      <li>
                        <a>Milchgetränke</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">Metzgerei</h3>
                    <ul>
                      <li>
                        <a>Rindfleisch</a>
                      </li>
                      <li>
                        <a>Hackfleisch</a>
                      </li>
                      <li>
                        <a>Gulaschfleisch</a>
                      </li>
                      <li>
                        <a>Hähnchen</a>
                      </li>
                      <li>
                        <a>Hähnchenflügel</a>
                      </li>
                      <li>
                        <a>Hähnchenschenkel</a>
                      </li>
                      <li>
                        <a>Lammfleisch</a>
                      </li>
                      <li>
                        <a>Sucuk & Wurst</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </li> */}
            <li>
              <Link to="/product">Produkt</Link>
            </li>
            <li>
              <Link to="/about">Über uns</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* SAĞ */}
        <div className="navbar-end">
          <a target="_blank" href="https://www.instagram.com/anadolugidakiel/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
