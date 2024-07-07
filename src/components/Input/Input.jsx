import React from "react";

function Input({
  placeholder = "",
  type = "text",
  onChange,
  className = "",
  onFocus,
  onKeyDown,
  value,
  props,
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className={` h-10  px-3 py-6  border-[1px] focus:border-2 rounded focus-visible:outline-none ${className}`}
      {...props}
    />
  );
}

export default Input;
