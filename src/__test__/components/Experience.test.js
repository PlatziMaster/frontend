import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(
    <Experience experience={[
      {
        'company': 'Harmon Hall',
        'endDate': 'April 2020',
        'jobDescription': 'To teach children, teenagers and adults English lessons.',
        'jobTitle': 'English Teacher',
        'startDate': 'October 2018',
      },
      {
        'company': 'Freelance',
        'endDate': 'March 2018',
        'jobDescription': 'To help children study for their English quizzes.',
        'jobTitle': 'English Teacher',
        'startDate': 'May 2017',
      },
    ]}
    />,
  );

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience has 2 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(1);
  });

});
