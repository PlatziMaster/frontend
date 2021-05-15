import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {

  const properties = {
    info: {
      name: 'mockthings',
      profession: 'mockthings',
      address: 'mockthings',
      emai: 'mockthings',
      website: 'mockthings',
      phone: 'mockthings',
    },
  };

  const header = mount(<Header {...properties} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
