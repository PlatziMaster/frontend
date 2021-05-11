import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import SectionContainer from '../../../../components/SectionContainer';
import './Skills.scss';

export default ({ data: { radarChart, abilities } }) => {

  function extract(prop) {
    return radarChart.reduce((total, curr) => [...total, curr[prop]], []);
  }

  const chartData = {
    labels: extract('label'),
    datasets: [
      {
        data: extract('value'),
        backgroundColor: extract('color'),
        borderWidth: 1,
      },
    ],
  };

  return (
    <SectionContainer id='skillsContainer'>
      <div>
        <ul>
          {abilities.map(a => <li key={a.key}>{a.label}</li>)}
        </ul>
      </div>
      <div style={{ width: '350px' }}>
        <PolarArea data={chartData} />
      </div>
    </SectionContainer>
  );
};
