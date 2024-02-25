import { ChangeEvent, useEffect, useState } from "react";
import "./Input.css";
interface InputProps {
  type: string;
  placeholder?: string;
  isInvalid?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => null;
  disabled?: boolean;
}
const Input = ({
  type,
  placeholder,
  disabled,
  defaultValue,
  onChange,
}: InputProps) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="custom-input">
      <input
        className={`${value && "input-with-value"} ${
          disabled && "disabled-input"
        }`}
        type={type}
        onChange={handleValueChange}
        disabled={disabled}
        defaultValue={value}
      />
      <span className="input-label">{placeholder}</span>
    </div>
  );
};

export default Input;
