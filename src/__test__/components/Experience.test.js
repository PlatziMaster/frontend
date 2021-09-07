import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';
import ExperienceItem from '../../components/ExperienceItem';

describe('<Experience />', () => {
  const experience = mount(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.experience-title').length).toEqual(1);
  });
  /*
  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(3);
  });*/

});

describe('ExperienceItem />', () => {
  const items = mount(<ExperienceItem />);

  test('ExperienceItem has 3 items', () => {
    expect(items.find('.experience-item').length).toEqual(1);
  });
});
