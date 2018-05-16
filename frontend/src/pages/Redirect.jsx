import React, { Component } from 'react';
import axios from 'axios';

class Redirect extends Component {

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    axios.put('/link', {id: id})
      .then(response => {
        window.location.assign(response.data.url);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="center-align" >
        <h3>Processing Request</h3>
      </div>
    )
  }
}

export default Redirect;