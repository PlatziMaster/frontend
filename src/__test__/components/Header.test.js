import React from 'react';
import { mount } from 'enzyme';
import Header from '../../containers/components/Header';

describe('<Header />', () => {
  const header = mount(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
