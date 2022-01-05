import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SingleCountry({ country, confirmed, backgroudColorForCountry }) {
  return (
    <>
      <Link to={`/${country}`} style={{ backgroundColor: backgroudColorForCountry }}>
        <div className="country-conainer">
          <BsFillArrowRightSquareFill className="IoMdOpen" />
          <HiLocationMarker className="HiLocationMarker" />
          <div className="info">
            <p>{country}</p>
            <p>
              {confirmed}
              {' '}
              cases
            </p>

          </div>
        </div>
      </Link>
    </>
  );
}

SingleCountry.defaultProps = {
  country: '',
  backgroudColorForCountry: '',
  confirmed: '',
};

SingleCountry.propTypes = {
  country: PropTypes.string,
  confirmed: PropTypes.string,
  backgroudColorForCountry: PropTypes.string,

};

export default SingleCountry;
