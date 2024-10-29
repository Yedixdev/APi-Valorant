import "../styles/error.css"
import { useLocation } from "react-router-dom";

const ErrorPages = () => {
  const location = useLocation();

  return (
    <div className="error"> 
      <div className="container-error">
        <h1>Error 404. Not Found</h1>
        <p>La ruta {location.pathname} no se encuentra.</p>
      </div>
    </div>
  );
}

export default ErrorPages