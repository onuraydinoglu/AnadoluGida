function Navbar() {
  return (
    <div className="navbar bg-[#1e1e2d] w-full">
      <div className="flex-1">
        <a className="btn btn-sm ms-5">Stok Takip</a>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm rounded-field">
              Lorem
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content  rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Çıkış Yap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
