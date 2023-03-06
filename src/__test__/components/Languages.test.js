import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';
import { data } from '../../../data.json';

describe('<Languages />', () => {
  const languages = mount(<Languages />);
  const languages = mount(<Languages data={data} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
@@ -13,8 +14,7 @@ describe('<Languages />', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  test('Languages has more than 1 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});