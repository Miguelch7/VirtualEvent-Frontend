const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const regexPhone = /^[+]?[0-9]{10,13}$/;

const validationsMessages = {
  name: 'El Nombre es obligatorio',
  surname: 'El Apellido es obligatorio',
  email: 'El Email debe ser válido: "example@example.com"',
  country: 'El País es obligatorio',
  phone: 'El Número de Telefono debe tener entre 10 y 13 números',
  job: 'El campo Puesto de Trabajo es obligatorio',
}

const validations = {
  name: value => !value?.trim(),
  surname: value => !value?.trim(),
  email: value => !regexEmail.test(value),
  country: value => !value?.trim(),
  phone: value => !regexPhone.test(value),
  job: value => !value?.trim()
}

export const validateInput = (input, value) => {
  const hasError = validations[input](value);

  let message = hasError ? validationsMessages[input] : null;

  return { 
    input, 
    message
  };
}