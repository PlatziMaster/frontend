import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import CardItem from './CardItem';
import '../styles/components/Academic.styl';

const Academic = () => {
  const {
    data: {
      dataFromApi: {
        data: { academic, certificate },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Academic Card-glass">
      <h4 className="H4-title">Academic</h4>
      <div className="Div-wrapperAcademic">
        {academic.map(
          ({ degree, description, institution, startDate, endDate }) => (
            <CardItem
              key={degree}
              degree={degree}
              description={description}
              institution={institution}
              startDate={startDate}
              endDate={endDate}
            />
          )
        )}
      </div>
      <h4 className="H4-title">- Other courses</h4>
      <div className="Div-wrapperAcademic">
        {certificate.map(({ name, description, institution, date }) => (
          <CardItem
            key={name}
            name={name}
            description={description}
            institution={institution}
            date={date}
          />
        ))}
      </div>
    </section>
  );
};

export default Academic;
