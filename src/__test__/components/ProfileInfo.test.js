import React from 'react';
import { mount } from 'enzyme';
import ProfileInfo from '../../components/ProfileInfo';

describe('<ProfileInfo />', () => {
  const profileInfo = mount(<ProfileInfo />);

  test('ProfileInfo render', () => {
    expect(profileInfo.length).toEqual(1);
  });

});
