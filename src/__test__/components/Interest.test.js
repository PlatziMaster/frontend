import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';

describe('<Interest />', () => {
  const interest = mount(<Interest />);

  test('Interests render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interests title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interests has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
