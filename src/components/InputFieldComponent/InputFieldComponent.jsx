import React from "react";
import { Input } from "..";

function InputFieldComponent({ label, placeholder }) {
  return (
    <div>
      <div>
        <label htmlFor={label} className="capitialize">
          {label}
        </label>
      </div>

      <Input placeholder={placeholder} />
    </div>
  );
}

export default InputFieldComponent;
