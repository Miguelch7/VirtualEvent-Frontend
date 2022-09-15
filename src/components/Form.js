import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axiosClient from '../config/axios';
import { validateForm } from '../helpers/validateForm';
import ErrorMessage from './ErrorMessage';

const initialForm = {
  name: '',
  surname: '',
  email: '',
  country: '',
  phone: '',
  job: '',
};

const Form = () => {

  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getCountries = async () => {
      const response = await axiosClient.get('/api/countries');

      setCountries(response.data.countries);
    };

    getCountries();
  }, []);

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

  const handleSubmit = async e => {
    e.preventDefault();

    const formValidations = validateForm(form);

    setErrors(formValidations);

    if(Object.keys(formValidations).length > 0) return;

    try {
      const response = await axiosClient.post('/api/attendees', form);

      console.log(response);

      Swal.fire({
        title: '¡Te inscribiste éxitosamente!',
        text: 'Gracias por inscribirte, revisa tu casilla de email para ver la invitación.',
        icon: 'success',
        confirmButtonColor: '#134e4a'
      });
    } catch (error) {

      const { response: { status, data } } = error;
      const alert = {
        title: '¡Error!',
        text: 'Ha ocurrido un error en la inscripción, vuelve a intentarlo.',
        icon: 'error',
        confirmButtonColor: '#134e4a'
      };
      const emailExists = data.errors.some((e) => e.msg === 'Email already exists');
      
      if (status === 400 && emailExists) {
        alert.title = '¡Advertencia!';
        alert.text = 'El email ingresado ya se encuentra inscripto.';
        alert.icon = 'warning';
      };

      Swal.fire(alert);
      return;
    }

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
          <option value="" className="italic text-gray-500" disabled>-- Seleccione su país --</option>
          { countries && countries.map(country => (
            <option
            key={ country._id }
            value={ country._id }
            >{ country.name }</option>
            ))}
        </select>
        { errors.country && <ErrorMessage message={ errors.country } />}
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