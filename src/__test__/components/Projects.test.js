import React from 'react';
import { mount } from 'enzyme';
import Projects from '../../components/Projects';
import { data } from '../../../data.json';

describe('<Projects />', () => {
  const experience = mount(<Projects data={data} />);

  test('Projects render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Projects title', () => {
    expect(experience.find('.Projects-title').length).toEqual(1);
  });

  test('Projects haves 3 items', () => {
    expect(experience.find('.Projects-item').length).toBeGreaterThan(2);
  });
});
