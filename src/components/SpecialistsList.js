import React from 'react';
import Specialist from './Specialist';

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
      { specialists && specialists.map(specialist => (
        <Specialist 
          key={ specialist.id }
          specialist={ specialist }
        />
      ))}
    </div>
  );
}
 
export default SpecialistsList;