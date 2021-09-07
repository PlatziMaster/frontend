import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';
import InterestItem from '../../components/InterestItem';

describe('<Interest />', () => {
  const interest = mount(<Interest />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.interest-title').length).toEqual(1);
  });
  /*
  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });*/

});

describe('InterestItem />', () => {
  const items = mount(<InterestItem />);

  test('InterestItem has 8 items', () => {
    expect(items.find('.interest-item').length).toEqual(1);
  });
});
