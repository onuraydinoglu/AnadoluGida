const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`btn btn-naturel ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
