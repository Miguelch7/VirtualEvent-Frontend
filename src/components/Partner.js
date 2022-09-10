import React from 'react';

const Partner = ({ partner }) => {

  const { name, image } = partner;

  return (
    <figure className="flex justify-center items-center mx-2 w-1/6">
      <img className="w-full" src={`img/partners/${ image }`} alt={ name } />
    </figure>
  );
}
 
export default Partner;