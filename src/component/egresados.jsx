import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import ingresoPadres from "../assets/img/ingresoPadres.webp";
import "../assets/egresados.css";
export default function Egresados() {
  const handleLinkClick = () => {
    Swal.fire({
      title: "OLVIDE MIS DATOS",
      text: "LAS CREDENCIALES SOLAMENTE SON OTORGADAS POR LA EMPRESA, Y TIENEN UN VALIDEZ UNICAMENTE MIENTRAS LOS EGRESADOS SE ENCUENTRAN REALIZANDO EL VIAJE",
      icon: "success",
      confirmButtonText: "Volver",
    });
  };

  const url =
    "https://www.dropbox.com/scl/fi/lxplsj2f7kdh5f4nt0zt4/ficha_medica.pdf?rlkey=3jz3b6iar8zkl4r6gfu52gsxm&dl=0";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("userName:", userName);
    console.log("password:", password);

    if (!userName || !password) {
      console.error(
        "Por favor, ingresa un nombre de usuario y una contraseña."
      );
      return;
    }

    const response = await fetch(
      "http://localhost:8080/logincheck?userName=" +
        userName +
        "&password=" +
        password,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      console.error(
        "Error al iniciar sesión. Por favor, verifica tus credenciales."
      );
      return;
    }

    let responseData;
    try {
      responseData = await response.json();
      console.log("responseData:", responseData); // Agrega una impresión de la respuesta
    } catch (e) {
      console.error("La respuesta no es un objeto JSON válido");
      return;
    }

    // Redirige al usuario basándose en su rol
    if (responseData.rol === "USER") {
      navigate("/escuela");
    } else if (responseData.rol === "ADMIN") {
      navigate("/panel");
    } else if (responseData.rol === "MASTER") {
      navigate("/master");
    }
  };

  return (
    <section id='exclusivo' className='egresado p-8'>
      <div className='flex flex-col justify-center items-center py-16 text-center text-gray-500 dark:text-gray-400'>
        <div className='flex flex-col justify-center items-center'>
          <img className='h-28 mb-4' src={ingresoPadres} alt='' />
          <p className='text-xl font-bold text-black'>
            "Ofrecemos a los padres un acceso exclusivo y seguro para ver las
            aventuras de sus hijos en nuestros viajes. Nuestra plataforma de
            control parental les brinda una experiencia privada para explorar y
            disfrutar las fotos capturadas durante sus travesías."
          </p>
        </div>
      </div>

      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        <form className='border border-black rounded-xl shadow-2xl max-w-sm mx-auto p-6 mt-8'>
          <div class='mb-5'>
            <label
              for='email'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Nombre de Usuario
            </label>
            <input
              type='text'
              id='email'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Ingrese su nombre de usuario'
              required
            />
          </div>
          <div class='mb-5'>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Ingrese su nombre de usuario'
              required
            />
          </div>

          <button
            type='submit'
            class='text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Iniciar Sesion
          </button>
          <br />
        </form>
        <div class='grid grid-cols-1 mt-8 gap-6 sm:grid-cols-1'>
          <p class='mb-3 text-gray-500 dark:text-gray-400'></p>
          <div class='mb-3 btn-small text-center text-gray-500 dark:text-gray-400'>
            <button
              type='submit'
              class='text-white btn-small text-center bg-pink-800 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base w-full sm:w-auto px-3 sm:px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6'
              onClick={handleLinkClick}>
              Olvidé mis datos
            </button>
            <div className='text-4xl text-center text-black'>
              <p>Descarga aca tu planilla medica para el viaje</p>
            </div>

            <button
              type='submit'
              class='text-black btn-small text-center bg-yellow-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base w-full sm:w-auto px-3 sm:px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6'
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/scl/fi/lxplsj2f7kdh5f4nt0zt4/ficha_medica.pdf?rlkey=3jz3b6iar8zkl4r6gfu52gsxm&dl=0"
                )
              }>
              Descargar
            </button>
          </div>

          <p class='mb-3 text-gray-500 dark:text-gray-400'></p>
        </div>
      </div>
    </section>
  );
}
