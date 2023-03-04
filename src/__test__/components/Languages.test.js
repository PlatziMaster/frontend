import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = mount(
    <Languages
      title='Languages'
      languages={[
        {
          'name': 'Spanish',
          'percentage': '90%',
        },
        {
          'name': 'English',
          'percentage': '50%',
        },
      ]}
    />,
  );

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.language-title').length).toEqual(1);
  });

  test('Languages has 2 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});
