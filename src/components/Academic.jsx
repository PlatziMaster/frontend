import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Academic.styl';
import '../styles/components/Certificate.styl';

const Academic = () => {
  const {
    data: {
      dataFromApi: {
        data: { Academic, Certificate },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Academic Card-glass">
      <h4 className="H4-title">Academic</h4>
      <div className="Div-wrapperAcademic">
        {Academic.map(({ degree, endDate, institution, startDate }, i) => (
          <div className="Academic-card" key={i}>
            <h3 className="Academic-header">{institution}</h3>
            <p className="Academic-date">
              {startDate} - {endDate}
            </p>
            <p className="Academic-description">{degree}</p>
          </div>
        ))}
      </div>
      <h4 className="H4-title">Studying</h4>
      <div className="Div-wrapperCertificate">
        {Certificate.map(({ institution, name }, i) => (
          <div className="Certificate-card" key={i}>
            <h3 className="Certificate-header">{institution}</h3>
            <p className="Certificate-name">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
