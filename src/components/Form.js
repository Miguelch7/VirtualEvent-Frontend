import React from 'react';

const Form = () => {

  return (
    <form
      className="ProximaNovaAltFont text-teal-900"
    >
        <legend className="font-bold text-center text-lg">
          ¡Inscríbete y reserva tu lugar ahora!
        </legend>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="name"
          >Nombre</label>

          <input 
            className="py-1 px-2 w-full" 
            type="text" 
            name="name" 
            id="name" 
          />
        </fieldset>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="surname"
          >Apellido</label>

          <input 
            className="py-1 px-2 w-full" 
            type="text" 
            name="surname" 
            id="surname"
          />
        </fieldset>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="email"
          >Correo electrónico del trabajo</label>

          <input 
            className="py-1 px-2 w-full" 
            type="email"
            name="email"
            id="email"
          />
        </fieldset>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="country"
          >País</label>

          <select 
            className="py-1 px-2 w-full" 
            name="country" 
            id="country" 
          >
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
        </fieldset>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="phone"
          >Número de teléfono</label>

          <input 
            className="py-1 px-2 w-full" 
            type="tel"
            name="phone"
            id="phone"
          />
        </fieldset>

        <fieldset className="my-5">
          <label 
            className="block font-semibold text-sm my-1" 
            htmlFor="job"
          >Puesto de trabajo</label>

          <input 
            className="py-1 px-2 w-full" 
            type="text"
            name="job"
            id="job"
          />
        </fieldset>

        <input 
          className="my-5 py-2 px-3 bg-teal-900 text-white font-bold w-full hover:cursor-pointer hover:bg-teal-700 transition-all"
          type="submit" 
          value="Inscríbete" 
        />
      </form>
  );
}
 
export default Form;