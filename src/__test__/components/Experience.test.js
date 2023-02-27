import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

});
