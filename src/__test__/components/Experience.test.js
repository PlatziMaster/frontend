import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Experience />', () => {
  const experience = mount(<Experience experience={dataMock.experience} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 2 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(1);
  });

});
