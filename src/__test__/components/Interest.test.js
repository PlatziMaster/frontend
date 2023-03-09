import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../elements/Interest';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Interest />', () => {
  const interest = mount(<Interest interest={dataMock.interest} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.interest-card').length).toBeGreaterThan(2);
  });
});
