/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Navbar from './Navbar';
import './countries.css';
import getRegionsThunk from '../redux/thunk/regions';

function Regions() {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { countryData } = useSelector((state) => state.reg);

  useEffect(() => {
    dispatch(getRegionsThunk(country));
  }, []);

  let totalCountryCases = String;
  if (countryData !== undefined && Object.keys(countryData).indexOf(country) !== -1) {
    totalCountryCases = countryData[country].today_confirmed.toLocaleString();
  }

  return (
    <>
      <Navbar nav="reg" />
      {(countryData === undefined || Object.keys(countryData).indexOf(country) === -1) && (
        <div className="loader">
          <Loader
            type="Puff"
            color="#FFF"
            height={70}
            width={70}
            timeout={3000}
          />
        </div>

      )}
      {countryData !== undefined && Object.keys(countryData).indexOf(country) !== -1 && (
        <div>
          <div className="header">
            <SVGMap
              map={World}
              className="map-svg-world"
              locationTabIndex="1"
            />
            <div className="header-rightText">
              <h1>{country}</h1>
              <p>
                {totalCountryCases }
                {' '}
                cases
              </p>
            </div>
          </div>
          {countryData !== undefined && countryData[country].regions.length === 0 && Object.keys(countryData).indexOf(country) !== -1 && (
          <div className="notAvailable"><p>Regions are not Available</p></div>
          )}
          {countryData !== undefined && countryData[country].regions.length !== 0 && Object.keys(countryData).indexOf(country) !== -1 && (
          <h1>Cases by Regions</h1>
          )}
          { countryData !== undefined && countryData[country].regions.length > 0 && Object.keys(countryData).indexOf(country) !== -1 && countryData[country].regions.map((regionItem) => (
            <>
              <div key={regionItem.id} className="regions-container">
                <div key={regionItem.id} className="region-container region">
                  <div>
                    {' '}
                    {regionItem.name}
                  </div>
                  <div className="region-rigt">
                    <p className="cases">{regionItem.today_confirmed}</p>
                    <BsFillArrowRightSquareFill className="regions-open-svg" />
                  </div>
                </div>
              </div>
            </>
          )) }
          <div />
        </div>
      )}
    </>
  );
}

export default Regions;
