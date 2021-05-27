import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const about = mount(<About />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 1 items', () => {
    about.state.isLoaded = true;
    expect(about.find('.About-item').length).toBeGreaterThan(0);
  });

});
