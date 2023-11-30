import Alert from "@mui/material/Alert";
import mroja from "../assets/img/m-error.webp";
import "../App.css";

const NoFoundPage = () => {
  return (
    <>
      <div className="merror">
        <img src={mroja} alt="error" />
      </div>
      <Alert variant="filled" severity="error">
        Pagina no Encontrada
      </Alert>
    </>
  );
};

export default NoFoundPage;
