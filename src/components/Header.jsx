import React from 'react';

export const Header = ({ children }) => {
  return (
    <div className="Header">
      <img
        src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/168914179_102887051920950_2830005832450781318_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L_PsD9poPdkAX-Q7L0t&_nc_ht=scontent-bog1-1.xx&oh=f713a1ae3a6fc74496374faab690699f&oe=61704C71"
        alt="Marlon"
      />
      {children}
    </div>
  );
};
