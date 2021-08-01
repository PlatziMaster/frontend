import React from 'react';
/* import md5 from 'md5'; */

function Gravatar(props) {
  const { avatar, alt, className } = props;
  // const hash = md5(email);
  return (
    <img
      className={className}
      src={avatar}
      /* src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} */
      alt={alt}
    />
  );
}

export default Gravatar;
