const Button = ({ children, className = "", ...props }) => {
  return (
    <div className={`btn btn-naturel ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Button;
