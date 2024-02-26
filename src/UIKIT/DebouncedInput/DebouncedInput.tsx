import Input, { InputProps } from "../Input";
import useDebouncedCallback from "../../hooks/useDebauncedCallback";

const DebouncedInput = ({ onChange = () => null, ...props }: InputProps) => {
  const handleInputChange = useDebouncedCallback((value: string) =>
    onChange(value)
  );

  return <Input {...props} onChange={handleInputChange} />;
};

export default DebouncedInput;
