import React from 'react';

const partners = [
  {
    name: 'Cluster Financiero',
    image: 'cluster_financiero.png'
  },
  {
    name: 'Asobanca',
    image: 'asobanca.png'
  },
  {
    name: 'IPBF',
    image: 'ipbf.jpg'
  },
  {
    name: 'high telecom',
    image: 'high_telecom.png'
  },
  {
    name: 'EBANX',
    image: 'ebanx.png'
  },
  {
    name: 'zendesk',
    image: 'zendesk.png'
  }
]

const PartnersList = () => {
  return (
    <div className="w-full flex justify-between my-5">
        { partners && partners.map(({ name, image }, index) => (
          <figure className="flex justify-center items-center mx-2 w-1/6">
            <img className="w-full" src={`img/partners/${ image }`} alt={ name } />
          </figure>
        ))}
      </div>
  );
}
 
export default PartnersList;