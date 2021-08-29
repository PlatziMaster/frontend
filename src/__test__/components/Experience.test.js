import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';
import { data } from '../../../data.json';

describe('<Experience />', () => {
  const experience = mount(<Experience data={data} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('h6').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('section').length).toEqual(1);
  });

});
