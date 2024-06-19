import React from "react";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`rounded py-3 px-4 capitalize border-solid border-[0.0625rem] border-[rgba(221,221,221,0.35)] whiteShadow whiteShadowAnimate ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
