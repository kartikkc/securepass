const Input = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 my-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
  export default Input;
  
//   border border-gray-300