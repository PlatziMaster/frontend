import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const about = mount(<About />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About name', () => {
    expect(about.find('.name').length).toEqual(1);
  });

  test('About contact info haves to be more than 2 items', () => {
    expect(about.find('.contact-info > *').length).toBeGreaterThan(2);
  });
});
