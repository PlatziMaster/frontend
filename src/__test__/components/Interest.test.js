import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';
import { data } from '../../../data.json';

describe('<Interest />', () => {
  const interest = mount(<Interest interest={data.interest} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
