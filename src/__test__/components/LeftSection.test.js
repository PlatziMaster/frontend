import React from 'react';
import { mount } from 'enzyme';
import { LeftSection } from '../../components/LeftSection';

// Data
import { data } from '../../../data.json';

describe('<LeftSection />', () => {
  const about = mount(<LeftSection resumeInfo={data} />);

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
