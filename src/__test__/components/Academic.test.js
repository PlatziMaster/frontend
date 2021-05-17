import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const academic = mount(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic items container', () => {
    expect(academic.find('.Academic-items-container').length).toEqual(1);
  });
});
