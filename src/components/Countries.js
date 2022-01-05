import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
// import World from '../img/World.jpg';
import getCountries from '../redux/thunk/countries';
import SingleCountry from './SingleCountry';
import Navbar from './Navbar';

function Countries() {
  const state = useSelector((state) => state.countries);
  let backgroudColorForCountry = '#EA618F';
  const [countriesToShow, setCountriesToShow] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const day = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

  let totalInfected;
  let countries = Object;
  if (state.total !== undefined) {
    countries = state.dates[day].countries;
    totalInfected = state.total.today_confirmed.toLocaleString();
  }

  useEffect(() => {
    setCountriesToShow(countries);
  }, [countries]);

  const handleSearch = (e) => {
    let { value } = e.target;
    const dumpObject = {};
    Object.assign(dumpObject, countries);
    if (value !== '') {
      value = value[0].toUpperCase() + value.slice(1, value.length);
      const deletedKeys = Object.keys(dumpObject).filter((key) => !key.includes(value));
      for (let i = 0; i < deletedKeys.length; i += 1) {
        delete dumpObject[deletedKeys[i]];
      }
      setCountriesToShow(dumpObject);
    } else {
      setCountriesToShow(countries);
    }
  };

  return (
    <>
      <Navbar page="countries" />
      <div className="header">
        {/* <img className="img-logo" alt="logo" src={World} /> */}

        <div className="header-rightText">
          <h1>All Countries </h1>
          <p>
            {totalInfected}
            {' '}
            cases
          </p>
        </div>

      </div>

      {state.total === undefined && (
      <div className="loader">
        <Loader
          type="Puff"
          color="#FFF"
          height={70}
          width={70}
          timeout={5000}
        />
      </div>
      )}
      {state.total !== undefined && (
      <>
        <h1>Cases by Countries</h1>
        <input type="text" onChange={handleSearch} placeholder="Search" />
        <div className="allcountriesContainer">
          {
        Object.keys(countriesToShow).map((country, index) => {
          if ((index + 1) % 2 === 0) {
            if (backgroudColorForCountry === '#EA618F') {
              backgroudColorForCountry = '#d35478dc';
            } else {
              backgroudColorForCountry = '#EA618F';
            }
          }

          return (
            <SingleCountry
              key={country}
              country={countries[country].name}
              confirmed={countries[country].today_confirmed.toLocaleString()}
              backgroudColorForCountry={backgroudColorForCountry}
            />
          );
        })
      }
        </div>
      </>
      )}
    </>
  );
}

export default Countries;
