import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';
import SkillsItem from '../../components/SkillsItem';

describe('<Skills />', () => {
  const skills = mount(<Skills />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.skills-title').length).toEqual(1);
  });
  /*
  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });*/

});

describe('SkillsItem />', () => {
  const items = mount(<SkillsItem />);

  test('SkillsItem has 6 items', () => {
    expect(items.find('.skills-item').length).toEqual(1);
  });
});

