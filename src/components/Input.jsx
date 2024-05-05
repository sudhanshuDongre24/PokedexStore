import React from "react";

/* 
Input component 

input value take 
1. Label
2. Placeholder
3. type
4. onChange
5. className
6. props
 
input tags are smart they keep all elements size uniform. 

*/

function Input({
  label = "",
  placeholder = "",
  type = "text",
  onChange = "",
  className = "",
  width = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2  ">
      <div className="flex item-center justify-between mt-5">
        {label && (
          <label className="font-bold" htmlFor={label}>
            {label}
          </label>
        )}
        {type.toLowerCase() == "password" && (
          <label className="text-blue-400 hover:text-blue-600">
            <a href="">Forget Password?</a>
          </label>
        )}
      </div>
      <input
        placeholder={placeholder}
        id={label}
        type={type}
        onChange={onChange}
        style={{ width: width }}
        className={`bg-black h-10  px-3 py-2 text-white focus:border-[#ff90e8] border-[1px] focus:border-2 rounded focus-visible:outline-none focus-visible:outline-none ${className}`}
      />
    </div>
  );
}

export default Input;
