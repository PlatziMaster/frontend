 import React from 'react';
 import { mount } from 'enzyme';
 import About from '../../components/About';

 describe('<About />', () => {
   const about = mount(<About />);

   test('About render', () => {
     expect(about.length).toEqual(1);
   });

   test('About title', () => {
     expect(about.find('.profile--title').length).toEqual(1);
   });

   test('About haves 3 items', () => {
     expect(about.find('.personal--card_data').length).toBeGreaterThan(2);
   });

 });
