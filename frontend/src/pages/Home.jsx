import React, { Component } from 'react';
import axios from 'axios';

import LinkCard from '../components/LinkCard';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      link: "",
      id: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      link: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/link', {url: this.state.link})
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data._id
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { link, id } = this.state;
    return (
      <div className="row">
        <LinkCard link={link} id={id} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Home;