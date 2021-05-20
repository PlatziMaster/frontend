import React from 'react';
import { mount } from 'enzyme';
import { Education } from '../../components/Education';

// Data
import { data } from '../../../data.json';

describe('<Education />', () => {
  const academic = mount(<Education education={data.education} />);

  test('Education render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Education title', () => {
    expect(academic.find('#Education-title').length).toEqual(1);
  });

  test('Education has 3 items', () => {
    expect(academic.find('#Education-item').length).toBeGreaterThan(2);
  });

});
