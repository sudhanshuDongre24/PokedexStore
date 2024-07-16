import React from "react";

function Button({
  children,
  onClick,
  className = "",
  type = "button",
  ariaLabel = "",
  overRideBasicTheme = false,
}) {
  const basicButtonTheme = overRideBasicTheme
    ? ""
    : "rounded py-3 px-4 capitalize border-solid border-[0.0625rem] border-[rgba(221,221,221,0.35)] focus-visible:outline-none";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${basicButtonTheme} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
