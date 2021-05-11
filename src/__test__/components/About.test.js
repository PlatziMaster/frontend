import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const about = mount(<About name='yadu lopez' profession='frontend' address='bogota' email='info@gmail.com' website='www.yadu.co' />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.Title').length).toEqual(0);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
