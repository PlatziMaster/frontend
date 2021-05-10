import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import MockProfileContext from './util';

describe('<Header />', () => {
  const header = mount(
    <MockProfileContext>
      <Header />
    </MockProfileContext>
  );

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });
});
