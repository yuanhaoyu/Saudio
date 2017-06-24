import React, { Component } from 'react';
import './App.css';
import './libs/stone.min.css';
import './font/iconfont.css';
import Header from './components/Header';
import Content from './components/Content';
import Btn from './components/Btn';
import Time from './components/Time';
import Controller from './components/Controller';

class App extends Component {
  render() {
    return (
      <div className="App container p0">
          <div id="Saudio">
              <Header/>
              <Content/>
              <Btn/>
              <Controller/>
          </div>
      </div>
    );
  }
}

export default App;
