import React from 'react';

const Hero = () => (
  <header className="relative">
    <img 
      src="img/hero.svg"
      className="absolute object-cover w-full h-full"
      alt="Hero section"
    />
    <div
      className="SharpSansFont relative py-12 w-full flex flex-col justify-center items-center bg-transparent text-teal-900"
    >
      <p className="my-2 text-xs tracking-widest uppercase font-bold py-1 px-2 md:py-2 md:px-3 rounded bg-amber-700 text-white animate__animated animate__flipInX animate__slow">
        WEBINAR
      </p>
      
      <h1 className="my-2 text-xl font-bold sm:text-2xl md:my-4 md:text-3xl xl:text-4xl animate__animated animate__lightSpeedInLeft">
        El reto de humanizar el CX financiero en 2021.
      </h1>
      
      <h2 className="my-2 text-xl italic font-bold sm:text-2xl md:my-4 md:text-3xl xl:text-4xl animate__animated animate__slideInRight">
        La experiencia de un Unicornio en Latam
      </h2>
      
      <h3 className="my-2 text-xs uppercase font-semibold sm:text-base md:my-4 md:text-l xl:text-xl animate__animated animate__zoomInDown">
        Miércoles 16 de diciembre | 17hs (Horario de Quito)
      </h3>
    </div>
  </header>
);
 
export default Hero;