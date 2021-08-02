import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';
import getData from '../../utils/getData';

const data = getData('http://localhost:3000');

describe('<Profile />', () => {
  const profile = mount(<Profile data={data} />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.Profile-title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.Profile-desc').length).toEqual(1);
  });
});
