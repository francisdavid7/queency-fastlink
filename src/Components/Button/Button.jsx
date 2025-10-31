const Button = ({ text, className }) => {
  return (
    <button className={`py-2 px-4 rounded-md ${className}`}>{text}</button>
  );
};

export default Button;
