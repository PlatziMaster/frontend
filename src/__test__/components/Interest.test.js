import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';
import { data } from '../../../data.json';

describe('<Interest />', () => {
  const interest = mount(<Interest />);
  const interest = mount(<Interest data={data} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
@@ -16,5 +17,4 @@ describe('<Interest />', () => {
  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });