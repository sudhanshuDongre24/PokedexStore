function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`rounded p-2 px-4  sm:p-3 sm:px-6 capitalize border-solid border-[0.0625rem] border-[rgba(221,221,221,0.35)] whiteShadow whiteShadowAnimate ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

/* 

border-2 rounded px-3 py-2 ml-4 capitalize  bg-black text-white hover:bg-white hover:text-black
*/
