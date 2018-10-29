import React, { Component, Fragment } from 'react';

import './App.css'
import logo from './logo.png'

import GithubRibbon from './components/GithubRibbon/GithubRibbon';
import Footer from './components/Footer/Footer';

const formatNumber = number => number < 10 ? `0${number}` : `${number}`;

function getBackground(time) {
  const hour = formatNumber(time.getHours());
  const min = formatNumber(time.getMinutes());
  const sec = formatNumber(time.getSeconds());

  const hex = '#' + hour + min + sec
  const display = `${hour} : ${min} : ${sec}`

  return {
    hex,
    display,
    style: {
      transition: 'all 0.8s',
      WebkitTransition: 'all 0.8s',
      background: hex
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      hex: '&nbsp',
      display: '&nbsp'
    };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        time: new Date()
      })
    },1000)
  }

  render() {
    const { style, hex, display } = getBackground(this.state.time)
    
    return (
      <Fragment>
        <GithubRibbon/>
        <div id="background" style={style}>
          
          <div id="inicio">
            <div id="inicioband">
              <div id="logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div id="intro">
              <p className="introh3">
                <span className="dottedline_left" />
                Que cor é agora?
                <span className="dottedline_right" />
              </p>
              <p className="introh1" id="agora">{display}</p>
              <p className="introh4" id="cor">{hex}</p>
              <br/>
              <p className="introh3">Mais um site de extrema utilidade pública</p>
            </div>
          </div>
          
        </div>
        <Footer style={style} />
      </Fragment>
    );
  }
}

export default App;
