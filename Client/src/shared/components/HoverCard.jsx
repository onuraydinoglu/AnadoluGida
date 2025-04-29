const HoverCard = ({ children, className = "" }) => {
  return (
    <div className="p-2">
      <div
        className={
          "card transition-transform duration-300 hover:scale-103 cursor-pointer border h-full "
        }
      >
        <div
          className={`card-body flex items-center justify-center text-center h-full p-4 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
