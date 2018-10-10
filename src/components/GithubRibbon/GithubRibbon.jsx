import React, { Component } from 'react';

import './GithubRibbon.scss';

class GithubRibbon extends Component {
  render() {
    return (
      <a href="https://github.com/guilhermesteves/que-cor-e-agora" target="_blank">
        <img
          className="github-ribbon"
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
          alt="Fork me on GitHub"></img>
      </a>
    );
  }
};

export default GithubRibbon;