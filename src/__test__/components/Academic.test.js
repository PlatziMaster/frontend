import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

const data = [
  {
    'degree': 'Frontend React.js',
    'description': '',
    'endDate': 'Present',
    'institution': 'Platzi',
    'startDate': 'Oct 2020',
  },
  {
    'degree': 'Design Graphic',
    'description': '',
    'endDate': 'Mar 2017',
    'institution': 'Fundación los libertadores',
    'startDate': 'Jan 2012',
  },
];

describe('<Academic />', () => {
  const academic = mount(<Academic academic={data} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('Title').length).toEqual(1);
  });

  test('Academic has 2 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(1);
  });

});
