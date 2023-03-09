import React from 'react';
import { mount } from 'enzyme';
import About from '../../elements/About';
import { dataMock } from '../../__mocks__/dataMock';

describe('<About />', () => {
  const about = mount(<About data={dataMock} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.title').length).toEqual(1);
  });
});
