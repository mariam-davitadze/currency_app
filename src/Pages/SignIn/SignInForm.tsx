import { useEffect, useState } from "react";
import DebouncedInput from "../../UIKIT/DebouncedInput";

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}
const isEmailValid = (email: string) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isformValid, setIsFormValidData] = useState(false);
  useEffect(() => {
    if (isEmailValid(email) && password.trim().length) {
      setIsFormValidData(true);
    }
  }, [email, password]);
  const onEmailChange = (value: string) => {
    setEmail(value);
  };
  const onPasswordChange = (value: string) => {
    setPassword(value);
  };
  const handleSubmit = () => {
    onSubmit(email, password);
  };
  return (
    <div>
      <DebouncedInput
        type="text"
        placeholder="Email"
        onChange={onEmailChange}
      />
      <DebouncedInput
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
      />
      <button
        className="secondary-button"
        onClick={handleSubmit}
        disabled={!isformValid}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
