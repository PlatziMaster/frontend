import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  const profile = mount(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.profile-card--title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.profile-card__details--description').length).toEqual(1);
  });

});
