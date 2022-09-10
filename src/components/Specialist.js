import React from 'react';

const Specialist = ({ specialist }) => {

  const { name, image, job } = specialist;

  return (
    <article className="flex items-center my-3">
      <figure className="h-12 md:h-16">
        <img className="h-full" src={`img/specialists/${ image }`} alt={ name } />
      </figure>
      <div className="mx-5 text-teal-900 text-start">
        <h5 className="font-bold">{ name }</h5>
        <p className="">{ job }</p>
      </div>
    </article>
  );
}
 
export default Specialist;