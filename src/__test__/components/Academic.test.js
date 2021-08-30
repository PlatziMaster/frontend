import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const academic = mount(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic has at least 1 item', () => {
    expect(academic.find('section').length).toEqual(1);
  });
});
