import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = mount(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header picture', () => {
    expect(header.find('.Header-pic').length).toEqual(1);
  });

});
