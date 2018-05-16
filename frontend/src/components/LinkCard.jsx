import React from 'react';

import InputForm from './InputForm';
import OutputLink from './OutputLink';

const LinkCard = ({ link, id, handleChange, handleSubmit, copyClipboard }) => {
  return (
    <div className="col s12 m6 offset-m3">
      <div className="card">
        <div className="card-content">
          <h5>Generate Link</h5>
          <InputForm link={link} handleChange={handleChange} handleSubmit={handleSubmit} context={"External"} />
        </div>
        <div className="card-action">
          <OutputLink id={id} copyClipboard={copyClipboard} />
        </div>
      </div>
    </div>
  )
}

export default LinkCard;