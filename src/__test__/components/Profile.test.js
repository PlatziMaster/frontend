import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';
import { data } from '../../../data.json';

describe('<Profile />', () => {
  const profile = mount(<Profile data={data} />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.MuiBox-root').length).toBeGreaterThan(1);
  });

});
