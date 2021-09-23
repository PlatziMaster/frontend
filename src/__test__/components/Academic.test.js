import React from 'react';
import { mount } from 'enzyme';
import { Academic } from '../../components/Academic';

describe('Pruebas en el componente <Academic />', () => {
  const academic = mount(<Academic />);

  test('Debe de renderizarse el componente', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });
});
