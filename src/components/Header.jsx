import React from 'react';

const h1Styles = {
  textAlign: 'center', 
  paddingBottom: '3.5em',
  paddingTop: '0.5em'
};

const Header = (props) => (
  <header>
    <h1 style={h1Styles}>Welcome to React</h1>
  </header>
);

export default Header;