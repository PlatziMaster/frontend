import React from 'react';
import { mount } from 'enzyme';
import Courses from '../../components/Courses';
import { data } from '../../../data.json';

describe('<Courses />', () => {
  const academic = mount(<Courses data={data} />);

  test('Courses render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Courses title', () => {
    expect(academic.find('.Courses-title').length).toEqual(1);
  });

  test('Courses has 3 items', () => {
    expect(academic.find('.Courses-item').length).toBeGreaterThan(2);
  });
});
