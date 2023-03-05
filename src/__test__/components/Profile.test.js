import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  const profile = mount(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('h3').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.paragraph').length).toEqual(3);
  });
});
