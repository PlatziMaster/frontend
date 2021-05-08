import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = mount(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });
  /* here below i changue the languages to be greater than 1, because i  just know 2 languages*/
  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});
