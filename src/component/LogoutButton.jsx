import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include", // Asegúrate de incluir las credenciales
      });

      if (response.ok) {
        // Realiza cualquier limpieza adicional que necesites aquí.
        // Por ejemplo, eliminar datos de usuario en el cliente.

        // Redirige al usuario a la página de inicio de sesión o a donde desees.
        window.location.href = "/egresados";
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
