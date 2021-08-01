import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';
import { data } from '../../../data.json';

describe('<About />', () => {
  const about = mount(<About data={data} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About have 1 item', () => {
    expect(about.find('.About-item').length).toEqual(1);
  });

});
