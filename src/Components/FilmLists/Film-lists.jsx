import React, { Component } from 'react';
import './film-lists.css';
import 'antd/dist/antd.css';
import Film from '../Film';

class FilmLists extends Component {

  render() {
    return (
      <div className="film-lists">
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
      </div>
    );
  }
}

export default FilmLists;
