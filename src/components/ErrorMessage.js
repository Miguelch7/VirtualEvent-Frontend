import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <p className="ProximaNovaFont text-red-500 mt-1 font-semibold text-sm">{ message }</p>
  );
}
 
export default ErrorMessage;