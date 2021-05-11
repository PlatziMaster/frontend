import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';

const data = [
  'javascript',
  'frontend',
  'react.js',
  'vue.js',
  'css',
  'animations',
  'next.js',
];

describe('<Interest />', () => {
  const interest = mount(<Interest interest={data} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
