import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import card1 from "../assets/img/card1.webp";
import card2 from "../assets/img/card2.webp";
import card3 from "../assets/img/card3.webp";

import "../assets/empresa.css";
import logoEmpresa from "../assets/img/logo-empresa.webp";

const Empresa = () => {
  return (
    <section id='empresa' className='empresa  p-8'>
      <div class='flex justify-center items-center mb-3 text-gray-500 dark:text-gray-400'>
        <img className='h-28' src={logoEmpresa} alt='' />
      </div>
      <div class='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        <div class='mb-3 text-gray-500 dark:text-gray-400'>
          <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img class='rounded-t-lg' src={card2} alt='' />
            </a>
            <div class='p-5'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Viajes Nacionales e Internacionales
              </h5>

              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                "Somos una agencia de turismo que convierte sueños en
                experiencias inolvidables. Descubre destinos nacionales e
                internacionales con nosotros, explorando el mundo a través de
                viajes diseñados para cautivar tus sentidos."
              </p>
            </div>
          </div>
        </div>
        {/* segunda card */}
        <div class='mb-3 text-gray-500 dark:text-gray-400'>
          <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img class=' rounded-t-lg' src={card1} alt='' />
            </a>
            <div class='p-5'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Viajes de Egresados
              </h5>

              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                "Nos especializamos en viajes estudiantiles transformadores.
                Desde descubrir culturas hasta aventuras educativas. creamos
                experiencias memorables que enriquecen mentes y fortalecen lazos
                entre estudiantes en destinos inspiradores."
              </p>
            </div>
          </div>
        </div>
        {/* tercera crad  */}
        <div class='mb-3 text-gray-500 dark:text-gray-400'>
          <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img class='rounded-t-lg' src={card3} alt='' />
            </a>
            <div class='p-5'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Equipo altamente capacitado
              </h5>

              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                "Nuestro equipo profesional y dedicados coordinadores guían a
                nuestros juniors en viajes educativos y de placer. Exploramos
                destinos fascinantes, fomentando el aprendizaje, la diversión y
                experiencias enriquecedoras para futuros líderes."
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Empresa;
