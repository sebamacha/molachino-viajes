import React from "react";
import logo from "../assets/img/m-redonda.webp";
import "../assets/navbar.css";
import Swal from "sweetalert2";

function App() {
  const handleLinkClick = () => {
    Swal.fire({
      title: "PAGOS",
      text: "SECCION EN DESAROLLO",
      icon: "success",
      confirmButtonText: "Volver",
    });
  };

  const handleLinkClickTwo = () => {
    Swal.fire({
      title: "REGISTRO",
      text: "SECCION EN DESAROLLO",
      icon: "success",
      confirmButtonText: "Volver",
    });
  };
  return (
    <div className='navbar-custom'>
      <nav className='bg-black border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='#'
            className='no-underline flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} className='h-10' alt='Flowbite Logo' />
            <span className='self-center text-white text-3xl font-mono font-bold whitespace-nowrap dark:text-white'>
              Molachino Viajes
            </span>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col  md:p-0   rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='#inicio'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#empresa'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                  Empresa
                </a>
              </li>
              <li>
                <a
                  href='#exclusivo'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                  Exclusivo
                </a>
              </li>
              <li>
                <a
                  href='#registro'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                  onClick={handleLinkClickTwo}>
                  Registro
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                  onClick={handleLinkClick}>
                  Pagos
                </a>
              </li>
              <li>
                <a
                  href='#contacto'
                  className='no-underline text-2xl block py-2 px-0 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
