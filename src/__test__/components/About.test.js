import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';
import { data } from '../../../data.json';

describe('<About />', () => {
  const about = mount(<About />);
  const about = mount(<About data={data} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
@@ -16,5 +17,4 @@ describe('<About />', () => {
  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});