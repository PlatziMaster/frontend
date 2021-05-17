import React from 'react';
import { mount } from 'enzyme';
import { LeftSection } from '../../components/LeftSection';

describe('<LeftSection />', () => {
  const about = mount(<LeftSection />);

  test('LeftSection render', () => {
    expect(about.length).toEqual(1);
  });

  // test('LeftSection title', () => {
  //   expect(about.find('.LeftSection-title').length).toEqual(1);
  // });

  // test('LeftSection haves 3 items', () => {
  //   expect(about.find('.LeftSection-item').length).toBeGreaterThan(2);
  // });

});
