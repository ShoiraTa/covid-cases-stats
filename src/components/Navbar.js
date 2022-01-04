import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <IoIosArrowBack className="icon-white" />
        </div>
        <div className="nav-middle">
          <div className="nav-link-center">Countries</div>
        </div>
        <div className="nav-right">
          <FaMicrophone className="icon-white" />
          <FiSettings className="icon-white" />
        </div>
      </nav>
      <div className="header">
        <SVGMap
          map={World}
          className="map-svg-world"
          locationTabIndex="1"
        />

        <div className="header-rightText">
          <h1>All Countries</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
