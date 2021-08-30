import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = mount(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('h4').length).toEqual(1);
  });
});
