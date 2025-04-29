const GradientOverlay = ({
  fromClass = "from-black/90",
  toClass = "to-black/0",
  direction = "bg-gradient-to-r",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 ${direction} ${fromClass} ${toClass} ${className}`}
    />
  );
};

export default GradientOverlay;
