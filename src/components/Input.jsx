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
  ...props
}) {
  return (
    <div className="flex flex-col gap-2  ">
      <div className="flex  item-center justify-between mb-2">
        {label && (
          <label className="font-bold" htmlFor={label}>
            {label}
          </label>
        )}
        {type.toLowerCase() == "password" && (
          <label className="text-blue-600">
            <a href="">Forget Password?</a>
          </label>
        )}
      </div>
      <input
        placeholder={placeholder}
        id={label}
        type={type}
        onChange={onChange}
        className={`bg-[rgb(29,29,29)] h-10 px-3 py-2 text-white border-white border-[1px] rounded focus-visible:outline-none focus-visible:outline-[rgb(223,224,222)] ${className}`}
      />
    </div>
  );
}

export default Input;
