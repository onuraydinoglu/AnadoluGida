const Subtitle = ({ children, className = "" }) => {
  return (
    <div>
      <h2 className={`text-xl mb-5 ${className}`}>{children}</h2>
    </div>
  );
};

export default Subtitle;
