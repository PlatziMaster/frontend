import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const about = mount(<About />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.about-title').length).toEqual(1);
  });

});
