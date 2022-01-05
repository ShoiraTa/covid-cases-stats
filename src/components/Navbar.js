import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <div className="nav-left">
            <IoIosArrowBack className="icon-white" />
          </div>
        </Link>
        <div className="nav-middle">
          <div className="nav-link-center">Countries</div>
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
