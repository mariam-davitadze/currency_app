import { useNavigate } from "react-router-dom";
import PageNotFoundImg from "../../assets/page_not_found.svg";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <img alt="page-not-found" src={PageNotFoundImg} />
      <h1>Opps! Page Not Found!</h1>
      <button className="secondary-button" onClick={onNavigate}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
