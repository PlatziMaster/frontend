import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import { data } from '../../../data.json';

describe('<Header />', () => {
  const header = mount(<Header data={data} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
