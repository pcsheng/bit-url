import React from 'react';

import '../css/OutputLink.css';

const OutputLink = ({ id, copyClipboard }) => {
  return (
    <div className="flex-contain valign-wrapper" >
      <p id="copy-target">{"localhost:3000/to/" + id}</p>
      <button className="btn waves-effect waves-light" onClick={copyClipboard} ><i className="material-icons">content_copy</i></button>
    </div>
  )
}

export default OutputLink;