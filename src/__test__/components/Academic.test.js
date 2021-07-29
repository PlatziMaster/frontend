import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import dataMock from '../../__mocks__/dataMock';

describe('<Academic />', () => {
  const academic = mount(<Academic academic={dataMock.Academic} certificate={dataMock.certificate}/>);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has academic container', () => {
    expect(academic.find('.Academic-itemContainer').length).toEqual(1);
  });

});
