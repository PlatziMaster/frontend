import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';
import MockProfileContext from './util';

describe('<Profile />', () => {
  const profile = mount(
    <MockProfileContext>
      <Profile />
    </MockProfileContext>
  );

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
