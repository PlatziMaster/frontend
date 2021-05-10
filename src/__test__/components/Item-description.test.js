import React from 'react';
import { mount } from 'enzyme';
import ItemDescription from '../../components/Item-description';

describe('<ItemDescription />', () => {
  const itemDescription = mount(<ItemDescription />);

  test('Item-description render', () => {
    expect(itemDescription.length).toEqual(1);
  });

  test('Item title', () => {
    expect(itemDescription.find('.Item-title').length).toEqual(1);
  });

  test('Item organization', () => {
    expect(itemDescription.find('.Item-organization').length).toEqual(1);
  });

  test('Item description', () => {
    expect(itemDescription.find('.Item-description').length).toEqual(1);
  });

  test('Item startDate', () => {
    expect(itemDescription.find('.Item-start-date').length).toEqual(1);
  });

  test('Item endDate', () => {
    expect(itemDescription.find('.Item-end-date').length).toEqual(1);
  });

});
