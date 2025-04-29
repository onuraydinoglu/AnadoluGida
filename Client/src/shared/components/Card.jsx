const Card = ({ children, className = "" }) => {
  return (
    <div className={"card cursor-pointer border h-full "}>
      <div className={`card-body h-full p-4 ${className}`}>{children}</div>
    </div>
  );
};

export default Card;
