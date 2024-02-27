import "./SignInPage.css";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log("submitd", { email, password });
  };
  return (
    <div>
      <h1>sign in</h1>
      <SignInForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SignInPage;
