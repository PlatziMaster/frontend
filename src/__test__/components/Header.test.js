import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const data = { name: 'Johnnie',
    profession: 'Fisico',
    address: 'Pereira',
    email: 'Johesloc',
    phone: '1345',
    avatar: 'ava',
    social: ['1', '2'],
    website: 'web' };

  const header = mount(<Header {...data} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
