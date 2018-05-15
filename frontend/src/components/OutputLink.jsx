import React from 'react';

import '../css/OutputLink.css';

const OutputLink = ({ id }) => {
  return (
    <div className="flex-contain valign-wrapper" >
      <p>{"localhost:3000/" + id}</p>
      <button class="btn waves-effect waves-light"><i class="material-icons">content_copy</i></button>
    </div>
  )
}

export default OutputLink;