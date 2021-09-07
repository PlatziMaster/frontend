import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import AcademicItem from '../../components/AcademicItem';

describe('<Academic />', () => {
  const academic = mount(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.academic-title').length).toEqual(1);
  });

});

describe('AcademicItem />', () => {
  const items = mount(<AcademicItem />);

  test('Academic has 1 items', () => {
    expect(items.find('.academic-item').length).toEqual(1);
  });
});
