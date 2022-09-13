export const validateForm = form => {
  let errors = {};

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) errors.name = 'El Nombre es obligatorio';

  if (!form.surname.trim()) errors.surname = 'El Apellido es obligatorio';

  if (!regexEmail.test(form.email)) errors.email = 'El Email debe ser válido: "example@example.com"';

  if (!form.country.trim()) errors.country = 'El País es obligatorio';

  if (!form.phone.trim()) errors.phone = 'El Número de Telefono debe contener al menos 10 números';

  if (!form.job.trim()) errors.job = 'El campo Puesto de Trabajo es obligatorio';

  return errors;
}