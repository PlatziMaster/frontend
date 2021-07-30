import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const academic = mount(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.education-card--title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.education-card__details--container').length).toEqual(1);
  });

});
