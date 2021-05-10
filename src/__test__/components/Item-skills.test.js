import React from 'react';
import { mount } from 'enzyme';
import ItemSkill from '../../components/Item-skills';

describe('<ItemSkill />', () => {
  const itemSkill = mount(<ItemSkill />);

  test('Item skill render', () => {
    expect(itemSkill.length).toEqual(1);
  });

  test('Item skill', () => {
    expect(itemSkill.find('.Item-skill').length).toEqual(1);
  });

});
