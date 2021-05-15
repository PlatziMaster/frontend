import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {

  const lang = [
    {
      'name': 'Spanish',
      'percentage': '90%',
    },
    {
      'name': 'English',
      'percentage': '45%',
    },
    {
      'name': 'Polish',
      'percentage': '45%',
    },

  ];

  const languages = mount(<Languages info={lang} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
