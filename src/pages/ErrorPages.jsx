import { useLocation } from "react-router-dom";

const ErrorPages = () => {
  const location = useLocation();

  return (
    <>
      <h1>Error 404. Not Found</h1>
      <p>La ruta {location.pathname} no se encuentra.</p>
    </>
  );
}

export default ErrorPages