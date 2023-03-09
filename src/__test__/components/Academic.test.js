import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Academic />', () => {

  const academic = mount(<Academic academic={dataMock.academic} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 2 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(1);
  });

});
