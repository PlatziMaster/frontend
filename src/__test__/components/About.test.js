import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const about = mount(
    <About
      address='Estado de México, México.'
      email='danrmrz@outlook.com'
      website='https://danrmrz.com'
      telegram='@danrmrz'
    />,
  );

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About list', () => {
    expect(about.find('.About-list').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
