import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPlane,
  FaPlaneDeparture,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import "../assets/contacto.css";
import mRedonda from "../assets/img/m-redonda-negra.webp";

const Contacto = () => {
  return (
    <div id='contacto' className='contact-container back'>
      <div className='flex flex-col md:flex-row md:flex-wrap md:items-center justify-center md:justify-start gap-4'>
        <a className='icon-contacto'>
          <FaPlane className='icon-left animate-pulse' />
        </a>
        <p className='text-4xl font-bold text-center'>Contacto</p>
        <a className='icon-contacto'>
          <FaPlaneDeparture className='icon-left animate-pulse' />
        </a>
      </div>

      <h2 className='contacto'>J.R. Rodriguez 1029</h2>
      <h2 className='contacto'>Pujato, Santa Fe</h2>
      <h3 className='contacto'>03464 494075</h3>

      <div className='social-icons'>
        <a
          href='https://www.facebook.com/MolachinoSitioOficial/?locale=es_LA'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'>
          <FaFacebook className='icon-facebook' />
        </a>
        <a
          href='https://twitter.com/exclusivomola'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'>
          <FaTwitter className='icon-twitter' />
        </a>
        <a
          href='https://www.instagram.com/molachinoficial/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'>
          <FaInstagram className='icon-instagram' />
        </a>
        <a
          href='https://wa.me/+5493464556975'
          target='_blank'
          rel='noopener noreferrer'
          className='icon'>
          <FaWhatsapp className='icon-whatsapp' />
        </a>
        <a href='mailto:molachino@molachinoviajes.com' className='icon'>
          <MdEmail className='icon-email' />
        </a>
        <a href='tel:03464494075' className='icon'>
          <MdPhone className='icon-phone' />
        </a>
      </div>
    </div>
  );
};

export default Contacto;
