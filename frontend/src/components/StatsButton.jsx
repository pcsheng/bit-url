import React from 'react';
import { Link } from 'react-router-dom';

import '../css/StatsButton.css'

const StatsButton = () => {
  return (
    <Link to="/stats" className="btn-floating btn-large waves-effect waves-light red stats-btn"><i className="material-icons">assessment</i></Link>
  )
}

export default StatsButton;