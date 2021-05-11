import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = mount(<Header name='Yadurani López' avatar='foto.jpg'>Info About </Header>);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header img', () => {
    expect(header.find('.Header-img').length).toEqual(1);
  });

});
