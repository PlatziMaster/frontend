import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';
import { data } from '../../../data.json';

describe('<Skills />', () => {
  const skills = mount(<Skills />);
  const skills = mount(<Skills data={data} />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
@@ -16,5 +17,4 @@ describe('<Skills />', () => {
  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});