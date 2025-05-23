const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={className ? className : "w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-5 rounded-md transition duration-200"}
    >
      {children}
    </button>
  );
};

export default Button;
