import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(
    <Experience
      title='Experiencia'
      experience={[
        {
          'company': 'Oxirium SA',
          'endDate': 'Present',
          'jobDescription': 'Develop new products in Angular 11 for logistic tracking. Integration with i18n, Google Maps, Social Networks sing in, and Chart js libraries. Collaborating closely with backend team and designers. Active participation in product decisions. Working with APIs for data consumption.',
          'jobTitle': 'Frontend Developer',
          'startDate': 'Nov 2020',
        },
        {
          'company': 'Loger SRL',
          'endDate': 'Present',
          'jobDescription': 'Taking part as freelancer in the development of a Smart City Dashboard. Write well-designed, efficient code by using best software development practices.  Integration with i18n, Google Maps, and Chart js libraries. API consuming.',
          'jobTitle': 'Freelance Frontend Developer',
          'startDate': 'Jul 2020',
        },
        {
          'company': 'Rockstar Solutions',
          'endDate': 'Oct 2020',
          'jobDescription': 'Develop Angular App writing efficient code. Integration with backend. API consuming. Collaborate with other team members and stakeholders. Magento e-Commerce site maintenance. Bulk product loading and monthly and special dates website updates. Catalog management (prices and catalog rules). Collaborate in some custom modules development. ',
          'jobTitle': 'Frontend Developer',
          'startDate': 'Mar 2018',
        },
      ]}
    />,
  );
  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.experience-item').length).toBeGreaterThan(2);
  });

});
