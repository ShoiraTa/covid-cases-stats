import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <IoIosArrowBack className="icon-white" />
        </div>
        <div className="nav-middle">
          <div className="nav-link">Countries</div>
        </div>
        <div className="nav-right">
          <FaMicrophone className="icon-white" />
          <FiSettings className="icon-white" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
