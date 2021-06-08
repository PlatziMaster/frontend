import { shallow } from 'enzyme';
import React from 'react';
import About from '../../components/About';
import Header from '../../components/Header';

describe('Test on <Header />', () => {
  const wrapper = shallow(
    <Header>
      <About />
    </Header>
  );
  
  const about = shallow(<About />)
  console.log(wrapper);
   test('Should take snapshot', () => {
     expect(wrapper).toMatchSnapshot();
     expect(about).toMatchSnapshot()
   });

  test('Header title', () => {
    expect(wrapper.find('.Header-title').length).toEqual(1);
  });
});
