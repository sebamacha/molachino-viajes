import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Panel = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setMensaje("¡Bienvenido al panel!");
  }, []);

  const handleClick = () => {
    navigate("/registro");
  };

  return (
    <>
      <h1>{mensaje}</h1>
      <div>
        <LogoutButton />
      </div>
      <button onClick={handleClick}>Haz clic en mí</button>
    </>
  );
};

export default Panel;
