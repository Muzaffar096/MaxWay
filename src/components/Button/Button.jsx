const Button = (props) => {
  const { children, onClick, classes, image } = props;
  return (
    <button onClick={onClick} className={`border-none md:w-full bg-[#51267D] rounded-full text-white p-2 px-4`}>
      {children} {image}
    </button>
  );
};

export default Button;
