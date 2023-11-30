import React, { useState, useEffect } from "react";
import "../assets/inicio.css";
import logodark from "../assets/img/m-redonda-negra.webp";

const Inicio = () => {
  return (
    <div id='inicio' className='hero'>
      <div className='hero text-center'>
        <div className='mb-3 flex items-stretch'>
          <img className='img-m animate-pulse' src={logodark} alt='' />
        </div>
        <h1 className='molachino'>Molachino Viajes y Turismo</h1>
      </div>
    </div>
  );
};

export default Inicio;
