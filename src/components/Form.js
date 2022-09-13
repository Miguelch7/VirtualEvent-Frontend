import React, { useState } from 'react';
import { validateForm } from '../helpers/validateForm';
import ErrorMessage from './ErrorMessage';

const initialForm = {
  name: '',
  surname: '',
  email: '',
  country: 'Argentina',
  phone: '',
  job: '',
};

const Form = () => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const { name, surname, email, country, phone, job } = form;

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateForm(form));

    if (Object.keys(errors).length) return;

    // TODO: Send Form

    resetForm();
  }

  return (
    <form
      className="ProximaNovaAltFont text-teal-900"
      onSubmit={ handleSubmit }
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
            value={ name }
            onChange={ handleInputChange }
          />
          { errors.name && <ErrorMessage message={ errors.name } />}
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
            value={ surname }
            onChange={ handleInputChange }
          />
          { errors.surname && <ErrorMessage message={ errors.surname } />}
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
            value={ email }
            onChange={ handleInputChange }
            />
          { errors.email && <ErrorMessage message={ errors.email } />}
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
            value={ country }
            onChange={ handleInputChange }
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
            value={ phone }
            onChange={ handleInputChange }
          />
          { errors.phone && <ErrorMessage message={ errors.phone } />}
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
            value={ job }
            onChange={ handleInputChange }
          />
          { errors.job && <ErrorMessage message={ errors.job } />}
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