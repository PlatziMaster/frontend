import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(
    <Experience
      experience={[
        {
          'company': 'Daniel Ramirez Malvados y Asociados',
          'endDate': 'Presente',
          'jobDescription': 'El mejor lugar del mundo para trabajar, hay galletas, pero el jefe falta mucho',
          'jobTitle': 'Frontend',
          'startDate': '2020',
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

  test('Experience haves 1 item', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(0);
  });

});
