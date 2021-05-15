import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {

  const info = [
    {
      'degree': 'Lic. Sistemas Computacionales Administrativos',
      'description': 'La licenciatura me permitira adquirir conocimientos base para mi carrera profesional sobre sistemas y administracion.',
      'endDate': '2022',
      'institution': 'Universidad Veracruzana',
      'startDate': 'Jan 2019',
    },
    {
      'degree': 'Tecnico en Recursos Humanos',
      'description': 'En mis estudios previos a la universidad, consegui el certificado de tecnico en recursos humanos.',
      'endDate': 'Dec 2018',
      'institution': 'CBTIS #268',
      'startDate': 'Jan 2016',
    },
    {
      'degree': 'Tecnico en Recursos Humanos',
      'description': 'En mis estudios previos a la universidad, consegui el certificado de tecnico en recursos humanos.',
      'endDate': 'Dec 2018',
      'institution': 'CBTIS #268',
      'startDate': 'Jan 2015',
    },
  ];
  // [{
  //   degree: 'mock things',
  //   description: 'mock things',
  //   startDate: '21',
  //   endDate: 'mock things',
  //   institution: 'mock things',
  // },
  // {
  //   degree: 'mock things',
  //   description: 'mock things',
  //   startDate: '31',
  //   endDate: 'mock things',
  //   institution: 'mock things',
  // },
  // {
  //   degree: 'mock things',
  //   description: 'mock things',
  //   startDate: '1',
  //   endDate: 'mock things',
  //   institution: 'mock things',
  // }];

  const academic = mount(<Academic info={info} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });

});
