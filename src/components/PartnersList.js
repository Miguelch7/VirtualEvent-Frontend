import React from 'react';
import Partner from './Partner';

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
        { partners && partners.map((partner, index) => (
          <Partner
            key={ index }
            partner={ partner }
          />
        ))}
      </div>
  );
}
 
export default PartnersList;