import React, { Component } from 'react';
import './app.css';
import 'antd/dist/antd.css';
import FilmLists from '../FilmLists';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <FilmLists />
      </div>
    );
  }
}
