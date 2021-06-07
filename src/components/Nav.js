import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>;
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
      </ul>
      {children}
    </>
  );
};
export default Nav;
