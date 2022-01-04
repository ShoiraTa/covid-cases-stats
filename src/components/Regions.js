import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function Regions() {
  return (
    <div>
      <h1>Cases by Regions</h1>
      <div className="regions-container">
        <div className="region-container region">
          <div> Uzbekistan</div>
          <div className="region-rigt">
            <p className="cases">1000 cases</p>
            <BsFillArrowRightSquareFill className="regions-open-svg" />
          </div>
        </div>
        <div className="region-container region">
          <div> Uzbekistan</div>
          <div className="region-rigt">
            <p className="cases">1000 cases</p>
            <BsFillArrowRightSquareFill className="regions-open-svg" />
          </div>
        </div>
        <div className="region-container region">
          <div> Uzbekistan</div>
          <div className="region-rigt">
            <p className="cases">1000 cases</p>
            <BsFillArrowRightSquareFill className="regions-open-svg" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Regions;
