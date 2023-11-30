import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleRegistrar = async (event) => {
    event.preventDefault();
    try {
      console.log("Enviando solicitud a http://localhost:8080/registro");
      const response = await fetch("http://localhost:8080/registro", {
        method: "POST",
        credentials: "include", // Asegúrate de incluir las credenciales
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          userName: userName,
          password: password,
          password2: password2,
        }),
      });
      console.log("Respuesta recibida:", response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("responseData:", responseData); // Agrega una impresión de la respuesta
        if (responseData.exito) {
          // Redirige al panel si la respuesta es correcta
          navigate("/panel");
        } else {
          // No se pudo redirigir porque responseData.exito no es verdadero
          // Limpia los campos del formulario para que el usuario pueda volver a intentarlo
          setNombre("");
          setUserName("");
          setPassword("");
          setPassword2("");
        }
      } else {
        // La respuesta no fue ok
        alert("La respuesta no fue ok");
      }
    } catch (error) {
      console.error("La respuesta no es un objeto JSON válido");
    }
  };
  return (
    <>
      <form id='registro' className='form-login' onSubmit={handleRegistrar}>
        <div className='mb-3'>
          <label htmlFor='nombre' className='form-label'>
            Nombre escuela
          </label>
          <input
            type='text'
            name='nombre'
            className='form-control'
            id='nombre'
            aria-describedby='emailHelp'
            onChange={(e) => setNombre(e.target.value)}
            autoComplete='off' // Corregido
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='userName' className='form-label'>
            Nombre de usuario
          </label>
          <input
            type='text'
            name='userName'
            className='form-control'
            id='userName'
            aria-describedby='emailHelp'
            onChange={(e) => setUserName(e.target.value)}
            autoComplete='username' // Corregido
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Password' className='form-label'>
            Contraseña
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='Password'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password' // Corregido
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Password2' className='form-label'>
            Confirmar contraseña
          </label>
          <input
            type='password'
            name='password2'
            className='form-control'
            id='Password2'
            onChange={(e) => setPassword2(e.target.value)}
            autoComplete='new-password' // Corregido
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Registrar
        </button>
      </form>
    </>
  );
};

export default Registro;
