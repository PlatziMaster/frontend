import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const academic = mount(
    <Academic
      academic={[
        {
          'degree': 'Frontend Developer',
          'description': 'Cursos en linea efectivos 100% real no fake',
          'endDate': 'Presente',
          'institution': 'Platzi.com',
          'startDate': 'May 2018',
        },
        {
          'degree': 'Ingenieria en Computación',
          'description': 'Educacóna tradicional... no es para todos (para mí) supongo',
          'endDate': 'Inconcluso',
          'institution': 'ESIME Culhuacán',
          'startDate': 'Ene 2014',
        },
      ]}
    />,
  );

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 2 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(1);
  });

});
