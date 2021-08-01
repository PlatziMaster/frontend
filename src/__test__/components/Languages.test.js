import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';
import getData from '../../utils/GetData';

const API = 'https://frontend-test-resume-api.herokuapp.com/data';

const data = getData(API);

describe('<Languages />', () => {
  const languages = mount(<Languages data={data.languages} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });
});
