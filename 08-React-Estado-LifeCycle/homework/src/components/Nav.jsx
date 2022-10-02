import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="https://www.admissions.soyhenry.com/">
    <img src={Logo} width="30" height="30" alt=""/>Henry - Weather App 
  </a>
  <SearchBar onSearch={onSearch}/>
</nav>
  );
};

export default Nav;
