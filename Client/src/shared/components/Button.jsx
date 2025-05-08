const Button = ({ children, className = "" }) => {
  return <div className={`btn btn-naturel ${className}`}>{children}</div>;
};

export default Button;
