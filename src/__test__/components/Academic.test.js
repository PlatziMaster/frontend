import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const academic = mount(
    <Academic academic={[
      {
        'degree': 'Petroleum Engineering',
        'description': '',
        'endDate': 'August 2016',
        'institution': 'UAG',
        'startDate': 'August 2012',
      },
    ]}
    />,
  );

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 1 item', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(0);
  });

});
