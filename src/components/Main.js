import React from 'react';
import PartnersList from './PartnersList';
import SpecialistsList from './SpecialistsList';

const Main = () => {
  return (
    <main className="text-justify text-gray-600 lg:w-1/2 lg:mr-10">
      <PartnersList />

      <p className="my-2">Te invitan a este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.</p>

      <p className="my-2">Además podemos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.</p>

      <p className="my-2">Escucha de primera mano la voz de nuestros especialistas:</p>

      <SpecialistsList />

      <p className="my-2">Participa e inspirate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.</p>

      <p className="my-2">¡Te esperamos!</p>

      <PartnersList />
    </main>
  );
}
 
export default Main;