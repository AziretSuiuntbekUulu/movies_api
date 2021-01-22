import React, { Component } from 'react';
import './app.css';
import 'antd/dist/antd.css';
import FilmLists from '../FilmLists';
import TopSearch from '../TopSearch';
import TopPanel from '../TopPanel';
import { Row, Col } from 'antd';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="app">
          <TopPanel />
          <TopSearch />
          <FilmLists />
      </div>
      </div>
    );
  }
}
