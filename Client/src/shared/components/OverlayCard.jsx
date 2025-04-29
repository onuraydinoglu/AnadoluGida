const OverlayCard = ({ image, title, children, className = "" }) => {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden ${className}`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {children}
    </div>
  );
};

export default OverlayCard;
