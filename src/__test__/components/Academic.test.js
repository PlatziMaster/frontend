import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../elements/Academic';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Academic />', () => {
  const academic = mount(<Academic academic={dataMock.Academic} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.title-academic').length).toBeGreaterThan(2);
  });
});
