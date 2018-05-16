import React from 'react';
import { Link } from 'react-router-dom';

import '../css/HomeButton.css'

const HomeButton = () => {
  return (
    <Link to="/" className="btn-floating btn-large waves-effect waves-light red home-btn"><i className="material-icons">home</i></Link>
  )
}

export default HomeButton;