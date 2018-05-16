import React, { Component } from 'react';
import axios from 'axios';

import StatsCard from '../components/StatsCard';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      link: "",
      url: "",
      hits: 0,
      users: []
    }
  }

  handleChange = (event) => {
    this.setState({
      link: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const index = this.state.link.lastIndexOf("/"),
          id = this.state.link.substr(index + 1);

    axios.get('/stats', {params: {id: id}})
      .then(response => {
        const { url, hits, users } = response.data;
        this.setState({
          url: url,
          hits: hits,
          users: users
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { link, url, hits, users } = this.state;
    return (
      <div className="row">
        <StatsCard link={link} url={url} hits={hits} users={users} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Home;