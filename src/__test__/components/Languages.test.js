import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = mount(<Languages languages={[{ name: 'Spanish', percenteage: 'nativo' }, { name: 'English', percenteage: '50%' }]} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Title').length).toEqual(1);
  });

  test('Languages has 2 items', () => {
    expect(languages.find('.Languages-item').length).toEqual(2);
  });

});
