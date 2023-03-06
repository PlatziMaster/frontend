import React from 'react';

export default function Experience({ data }) {
  console.log(data);
  return (
    <div className='big'>
      <h2> Experiencia</h2>
      <ul>
        <li>
          <h3>Freelancer</h3>
          <ul>
            {data.map(d => (
              <li key={d.key}>
                <h4>{d.jobTitle}</h4>
                <h5>{d.jobDescription}</h5>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3>Blockchain</h3>
          <ul>
            <li>
              <h4>Uso de variados contratos inteligentes</h4>
              <ul>
                <li>Minteo y transacción de NFTs</li>
                <li>Swaps de tokens</li>
                <li>Puentes a diversos Layer Two de Ethereum</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
