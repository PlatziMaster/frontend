import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';
import getData from '../../utils/GetData';

const API = 'https://frontend-test-resume-api.herokuapp.com/data';

const data = getData(API);

describe('<Experience />', () => {
  const experience = mount(<Experience data={data.experience} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });
});
