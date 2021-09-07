import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';
import LanguageItem from '../../components/LanguageItem';

describe('<Languages />', () => {
  const languages = mount(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.language-title').length).toEqual(1);
  });
  /*
  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });*/

});

describe('LanguageItem />', () => {
  const items = mount(<LanguageItem />);

  test('LanguageItem has 2 items', () => {
    expect(items.find('.language-item').length).toEqual(1);
  });
});
