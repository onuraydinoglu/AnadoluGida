const Header = ({ children }) => {
  return (
    <>
      <h2 className="text-2xl inter-regular text-center tracking-wider">{children}</h2>
      <div className="w-96 border-t border-black mx-auto mb-8 my-5" />
    </>
  );
};

export default Header;
