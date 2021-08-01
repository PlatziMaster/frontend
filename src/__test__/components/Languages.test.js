import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = mount(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.language-info--title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.language-detail--card').length).toBeGreaterThan(1);
  });

});
