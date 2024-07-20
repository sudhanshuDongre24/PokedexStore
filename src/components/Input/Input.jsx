import React, { useRef } from "react";

function Input({
  placeholder = "",
  type = "text",
  onChange,
  className = "",
  onFocus,
  onKeyDown,
  value,
  props,
  required,
  register,
  label,
  id,
  validate,
  minLength,
  maxLength,
}) {
  const requiredOptions = { required };
  if (validate !== undefined) requiredOptions.validate = validate;
  if (minLength !== undefined) requiredOptions.minLength = minLength;
  if (maxLength !== undefined) requiredOptions.maxLength = maxLength;

  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className={` h-10  px-3 py-6  border-[1px] focus:border-2 rounded focus-visible:outline-none ${className}`}
      {...(register ? register(label, requiredOptions) : {})}
      {...props}
    />
  );
}

export default Input;
