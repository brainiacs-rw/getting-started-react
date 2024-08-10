// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className='flex justify-center gap-4'>
        <li>
          <NavLink to={'/'}
            className={(({ isActive }) => isActive ? 'underline text-white' : 'text-white')}
          > Home</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}
            className={(({ isActive }) => isActive ? 'underline text-white' : 'text-white')} > Contact</NavLink>
        </li>
        <li>
          <NavLink to={'/posts'}
            className={(({ isActive }) => isActive ? 'underline text-white' : 'text-white')} > Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
