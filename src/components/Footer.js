import React from 'react';

const socialNetworks = [
  {
    name: 'Twitter',
    image: 'fa-twitter'
  },
  {
    name: 'Facebook',
    image: 'fa-facebook-f'
  },
  {
    name: 'LinkedIn',
    image: 'fa-linkedin-in'
  },
  {
    name: 'YouTube',
    image: 'fa-youtube'
  },
  {
    name: 'Instagram',
    image: 'fa-instagram'
  },
  {
    name: 'Snapchat',
    image: 'fa-snapchat'
  }
];


const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 pb-10 lg:pb-20">
      <div className="flex justify-between items-center w-4/5 m-auto py-8 border-b-2 border-b-gray-300 lg:py-10">
        <p className="text-gray-600 mx-1">&copy; { new Date().getFullYear() }</p>
        <div className="flex justify-between items-center w-2/3 lg:w-1/3">

          { socialNetworks && socialNetworks.map(({ image }, index) => (
            <div 
              key={ index } 
              className="mx-1 p-1 w-8 h-8 flex justify-center items-center rounded-full bg-gray-400 text-white md:w-10 md:h-10 hover:cursor-pointer hover:bg-gray-500 transition-all"
            >
              <i className={`fa-brands ${ image }`}></i>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
}
 
export default Footer;