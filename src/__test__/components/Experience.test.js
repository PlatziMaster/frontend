import React from 'react';
import { mount } from 'enzyme';
import { Experience } from '../../components/Experience';

// Data
import { data } from '../../../data.json';

describe('<Experience />', () => {
  const experience = mount(<Experience experience={data.experience} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('#Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('#Experience-item').length).toBeGreaterThan(2);
  });

});
