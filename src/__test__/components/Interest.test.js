import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';
import MockProfileContext from './util';

describe('<Interest />', () => {
  const interest = mount(
    <MockProfileContext>
      <Interest />
    </MockProfileContext>
  );

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
