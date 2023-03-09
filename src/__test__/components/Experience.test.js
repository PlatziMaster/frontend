import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../elements/Experience';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Experience />', () => {
  const experience = mount(<Experience experience={dataMock.experience} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.experience-container').length).toBeGreaterThan(2);
  });
});
