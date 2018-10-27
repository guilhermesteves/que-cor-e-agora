import React from 'react'

import logo from './logo-footer.png'

const year = new Date().getFullYear()

const Footer = ({ style }) => (
  <div id="footer" style={style}>
    <div id="footercontent" className="container">
      <img src={logo} alt="footerlogo" />
      <br/>
      <h5 id="copyright">&#169; 2015 - {year}
        <a href="http://guilhermeesteves.com" target="_blank" rel="noopener noreferrer"> Guilherme Esteves</a>
      </h5>
    </div>
  </div>
)

export default Footer