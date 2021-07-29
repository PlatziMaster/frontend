import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';
import dataMock from '../../__mocks__/dataMock';

describe('<Profile />', () => {
  const profile = mount(<Profile profile={dataMock}/>);

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
