import React from 'react';
import { mount } from 'enzyme';
import Certificates from '../../components/Certificates';

describe('<Certificates />', () => {
  const certificates = mount(<Certificates />);

  test('Certificates render', () => {
    expect(certificates.length).toEqual(1);
  });

  test('Certificates title', () => {
    expect(certificates.find('.Certificates-title').length).toEqual(1);
  });

  test('Certificates haves 3 items', () => {
    expect(certificates.find('.Certificates-item').length).toBeGreaterThan(2);
  });
});
