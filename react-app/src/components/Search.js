import React from 'react';

import Farefinder from './Farefinder';
import heroImage from '../assets/paris-hero.jpg';

const renderPromoCopy = () => (
  <div className='search-copy col-sm-7 col-md-7 text-white'>
    <h2>Exclusive Limited Time Offer</h2>
    <h3>Book your flight to Los Angeles departing from Hermosillo for only:</h3>
    <span className='price'>$599</span>
    <span className='lead'>USD</span>
  </div>
);

const Search = () => (
  <div className='search-hero' style={{ background: `url(${heroImage}) no-repeat 50% 100% / cover` }}>
    <div className='search-overlay' />
    <div className='search-cover'>
      <div className='search-container'>
        <div className='container'>
          <div className='col-sm-5 col-md-5'>
            <Farefinder />
          </div>
          { renderPromoCopy() }
        </div>
      </div>
    </div>
  </div>
);

export default Search;
