import React, { useState } from "react";

const Tooltip = ({
  children,
  text,
  position = "top",
  className = "bg-black text-white",
}) => {
  const [show, setShow] = useState(false);

  let toolTipArrowClasses = "";
  let toolTipBoxClasses = "";

  switch (position) {
    case "top":
      toolTipBoxClasses =
        "bottom-[100%] left-[50%] mb-[20px]  translate-x-[-50%]";
      break;
    case "bottom":
      toolTipBoxClasses =
        "bottom-[-100%] left-[50%] mb-[-20px]  translate-x-[-50%]";
      break;
    case "right":
      toolTipBoxClasses = "top-[50%] translate-y-[-50%] left-[100%] ml-[20px]";
      break;
    case "left":
      toolTipBoxClasses = "top-[50%] translate-y-[-50%] right-[100%] mr-[20px]";

      break;
  }

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>

      {show && (
        <div
          className={` absolute py-2 rounded px-6  text-nowrap  ${toolTipBoxClasses} ${className} `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
