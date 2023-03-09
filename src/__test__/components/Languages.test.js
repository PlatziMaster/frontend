import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../elements/Languages';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Languages />', () => {
  const languages = mount(<Languages languages={dataMock.languages} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.language-name').length).toBeGreaterThan(2);
  });
});
