import React, { Component } from 'react';

import logo from './logo-footer.png'

class Footer extends Component {
  render() {

    const year = new Date().getFullYear()

    return (
      <div id="footer">
        <div id="footercontent" className="container">
          <img src={logo} alt="logo" alt="footerlogo"/>
          <br/>
          <h5 id="copyright">&#169; 2015 - {year}
            <a href="http://guilhermeesteves.com" target="_blank" rel="noopener noreferrer"> Guilherme Esteves</a>
          </h5>
        </div>
      </div>
    );
  }
};

export default Footer;