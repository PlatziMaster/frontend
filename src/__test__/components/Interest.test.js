import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';

describe('<Interest />', () => {
  const interest = mount(
    <Interest
      title='Interest'
      interest={[
        'Programing',
        'Videogames',
        'Movies',
        'Biking',
      ]}
    />,
  );

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.interest-title').length).toEqual(1);
  });

  test('Interest has 4 items', () => {
    expect(interest.find('.interest-item').length).toBeGreaterThan(3);
  });

});
