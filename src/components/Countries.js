import React from 'react';
import SingleCountry from './SingleCountry';

function Countries() {
  return (
    <>
      <h1>Cases by Countries</h1>
      <div className="allcountriesContainer">
        <SingleCountry />
      </div>
    </>
  );
}

export default Countries;
