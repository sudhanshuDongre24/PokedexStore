import React, { useState } from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const [show, setShow] = useState(false);

  let toolTipArrowClasses = "";
  let toolTipBoxClasses = "";

  switch (position) {
    case "top":
      toolTipBoxClasses =
        "bottom-[100%] left-[50%] mb-[20px]  translate-x-[-50%]";
      toolTipArrowClasses = "top-[100%] left-[50%] translate-x-[-50%] ";
      break;
    case "bottom":
      toolTipBoxClasses =
        "bottom-[-100%] left-[50%] mb-[-20px]  translate-x-[-50%]";
      toolTipArrowClasses =
        "bottom-[100%] left-[50%] translate-x-[-50%] rotate-180";
      break;
    case "right":
      toolTipBoxClasses = "top-[50%] translate-y-[-50%] left-[100%] ml-[20px]";
      toolTipArrowClasses =
        "top-[50%] translate-y-[-50%]  left-[-10px] rotate-90  ";
      break;
    case "left":
      toolTipBoxClasses = "top-[50%] translate-y-[-50%] right-[100%] mr-[20px]";
      toolTipArrowClasses =
        "top-[50%] translate-y-[-50%]  right-[-10px] -rotate-90 ";
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
          className={`text-white bg-black absolute p-2 rounded px-6  text-nowrap  ${toolTipBoxClasses} `}
        >
          {text}
          <div
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            className={`w-[10px] h-[10px] bg-black absolute  ${toolTipArrowClasses}`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
