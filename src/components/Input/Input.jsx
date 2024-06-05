import React from "react";

function Input({
  placeholder = "",
  type = "text",
  onChange,
  className,
  props,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={`bg-black h-10  px-3 py-6 text-white focus:border-[#ff90e8] border-[1px] focus:border-2 rounded focus-visible:outline-none ${className}`}
      {...props}
    />
  );
}

export default Input;
