import React from 'react';
import { mount } from 'enzyme';
import Layout from '../../components/Layout';

describe('<Layout />', () => {
  const layout = mount(<Layout />);

  test('Layout render', () => {
    expect(layout.length).toEqual(1);
  });

  test('Layout', () => {
    expect(layout.find('.Layout').length).toEqual(1);
  });

});
