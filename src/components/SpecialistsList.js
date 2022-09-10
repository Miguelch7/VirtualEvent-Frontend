import React from 'react';

const specialists = [
  {
    name: 'José Perez',
    job: 'Presidente',
    image: 'img-astudillo.png'
  },
  {
    name: 'José Perez',
    job: 'Customer Service Senior Manager',
    image: 'img-astudillo.png'
  },
  {
    name: 'José Perez',
    job: 'Senior Customer Success Consultant',
    image: 'img-astudillo.png'
  },
  {
    name: 'José Perez',
    job: 'Gerente de Consultaria de Soluciones',
    image: 'img-astudillo.png'
  }
];

const SpecialistsList = () => {
  return (
    <div className="ProximaNovaAltFont flex flex-col justify-between my-2">
      { specialists && specialists.map(({ name, image, job }, index) => (
        <article key={ index } className="flex items-center my-3">
          <figure className="h-12 md:h-16">
            <img className="h-full" src={`img/specialists/${ image }`} alt={ name } />
          </figure>
          <div className="mx-5 text-teal-900 text-start">
            <h5 className="font-bold">{ name }</h5>
            <p className="">{ job }</p>
          </div>
        </article>
      ))}
    </div>
  );
}
 
export default SpecialistsList;