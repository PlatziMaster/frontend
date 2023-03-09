import React from 'react';
import { mount } from 'enzyme';
import HeaderSection from '../../components/HeaderSection';
import { dataMock } from '../../__mocks__/dataMock';

describe('<Header />', () => {
  const header = mount(<HeaderSection data={dataMock} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });
});
