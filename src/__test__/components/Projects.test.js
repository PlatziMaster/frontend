import React from 'react';
import { mount } from 'enzyme';
import { Projects } from '../../components/Projects';

describe('<Projects />', () => {
  const skills = mount(<Projects />);

  test('Projects render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Projects title', () => {
    expect(skills.find('#Projects-title').length).toEqual(1);
  });

  test('Projects has 3 items', () => {
    expect(skills.find('#Projects-item').length).toBeGreaterThan(2);
  });

});
