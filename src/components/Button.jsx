function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border-[1px] rounded px-3 py-2 ml-4 capitalize  bg-black text-white hover:bg-white hover:text-black`}
    >
      {children}
    </button>
  );
}

export default Button;
