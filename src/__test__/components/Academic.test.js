import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import getData from '../../utils/getData';

const data = getData('http://localhost:3000');
describe('<Academic />', () => {
  const academic = mount(<Academic data={data.academic} />);

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
