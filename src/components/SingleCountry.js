import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SingleCountry() {
  // const { } = props;

  return (

    <>
      <Link to="/region">
        <div className="country-conainer">
          <BsFillArrowRightSquareFill className="IoMdOpen" />
          <HiLocationMarker className="HiLocationMarker" />
          <p>Country</p>
        </div>
      </Link>

      <div className="country-conainer">
        <BsFillArrowRightSquareFill className="IoMdOpen" />
        <HiLocationMarker className="HiLocationMarker" />
        <p>Country</p>
      </div>
      <div className="country-conainer">
        <BsFillArrowRightSquareFill className="IoMdOpen" />
        <HiLocationMarker className="HiLocationMarker" />
        <p>Country</p>
      </div>
      <div className="country-conainer">
        <BsFillArrowRightSquareFill className="IoMdOpen" />
        <HiLocationMarker className="HiLocationMarker" />
        <p>Country</p>
      </div>
      <div className="country-conainer">
        <BsFillArrowRightSquareFill className="IoMdOpen" />
        <HiLocationMarker className="HiLocationMarker" />
        <p>Country</p>
      </div>
    </>
  );
}

SingleCountry.propTypes = {

};

export default SingleCountry;
