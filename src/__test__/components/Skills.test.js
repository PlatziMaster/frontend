import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../elements/Skills';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Skills />', () => {
  const skills = mount(<Skills skills={dataMock.skills} />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.skill-name').length).toBeGreaterThan(2);
  });
});
