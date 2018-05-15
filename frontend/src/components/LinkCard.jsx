import React from 'react';

import InputForm from './InputForm';
import OutputLink from './OutputLink';

const LinkCard = ({ link, id, handleChange, handleSubmit }) => {
  return (
    <div className="col s12 m6 offset-m3">
      <div className="card">
        <div className="card-content">
          <InputForm link={link} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="card-action">
          <OutputLink id={id} />
        </div>
      </div>
    </div>
  )
}

export default LinkCard;