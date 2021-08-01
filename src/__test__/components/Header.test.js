import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import getData from '../../utils/GetData';

const API = 'https://frontend-test-resume-api.herokuapp.com/data';

const data = getData(API);

describe('<Header />', () => {
  const header = mount(<Header data={data} social={data.social} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });
});
