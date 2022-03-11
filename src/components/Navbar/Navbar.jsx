import React from 'react';
import './Navbar.css';
import { GrHomeRounded, GrContactInfo } from 'react-icons/gr';
import { MdPersonOutline } from 'react-icons/md';
import { BiBriefcaseAlt2, BiHome } from 'react-icons/bi';
import { SiTinyletter } from 'react-icons/si';

function Navbar() {
  return (
    <div>
      <div className='navContainer'>
        <div className='home nav-link'>
          <a href='#home'>
            Home
            <BiHome className='nav-icon' />
          </a>
        </div>
        <div className='about nav-link'>
          <a href='#about'>
            About
            <MdPersonOutline className='nav-icon' />
          </a>
        </div>
        <div className='projects nav-link'>
          <a href='#project'>
            Projects
            <BiBriefcaseAlt2 className='nav-icon' />
          </a>
        </div>
        <div className='contact nav-link'>
          <a href='#contact'>
            Contact
            <SiTinyletter className='nav-icon' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
