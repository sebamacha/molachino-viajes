import React from "react";
import logo from "../assets/img/m-redonda.webp";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className='bg-black  shadow dark:bg-gray-900 text-white'>
      <div className='container mx-auto py-8 px-4 md:px-8'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <a
            href='#'
            className='no-underline flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} className='h-10' alt='Flowbite Logo' />
            <span className='self-center text-white text-3xl font-mono font-bold whitespace-nowrap dark:text-white'>
              Molachino Viajes
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium'>
            <span className='block text-sm text-white  text-center dark:text-gray-400'>
              © {year}{" "}
              <a
                href='https://flowbite.com/'
                className='no-underline text-white'>
                Molachino Viajes™
              </a>
              . All Rights Reserved.
            </span>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
          © {year}{" "}
          <a
            href='https://macharette.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'>
            Webmaster
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
