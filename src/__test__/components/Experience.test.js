import React from 'react';
import { mount } from 'enzyme';
import Experience, { Job } from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('h3').length).toEqual(1);
  });
});

describe('<Job />', () => {
  const job = mount(<Job />);

  test('Job render', () => {
    expect(job.length).toEqual(1);
  });
});
