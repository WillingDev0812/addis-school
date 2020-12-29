import React from 'react';

const Logo = (props) => {
  return (
    <img
      width="40"
      color="#fff"
      alt="Logo"
      src="/static/idea.svg"
      {...props}
    />
  );
};

export default Logo;
