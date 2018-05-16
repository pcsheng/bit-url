import React from 'react';

import InputForm from './InputForm';
import StatsData from './StatsData';

const StatsCard = ({ link, url, hits, users, handleChange, handleSubmit }) => {
  return (
    <div className="col s12 m6 offset-m3">
      <div className="card">
        <div className="card-content">
          <h5>Usage Information</h5>
          <InputForm link={link} handleChange={handleChange} handleSubmit={handleSubmit} context={"Internal"} />
        </div>
        <div className="card-action">
          {url && <h6>{url}</h6>}
          {url && <p>{"Times used: " + hits}</p>}
          {url && <StatsData users={users} />}
        </div>
      </div>
    </div>
  )
}

export default StatsCard;