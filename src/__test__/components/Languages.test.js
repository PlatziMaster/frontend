import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

import data from '../../../data.json';

describe('<Languages />', () => {
  const languages = mount(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(data.data.languages.length).toBeGreaterThan(2);
  });

});
