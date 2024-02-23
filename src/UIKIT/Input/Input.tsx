import { useState } from "react";
import "./Input.css";
interface InputProps {
  type: string;
  placeholder?: string;
}
const Input = ({ type, placeholder }: InputProps) => {
  const [value, setValue] = useState("");
  return (
    <div className="custom-input">
      <input
        className={value && "input-with-value"}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="input-label">{placeholder}</span>
    </div>
  );
};

export default Input;
