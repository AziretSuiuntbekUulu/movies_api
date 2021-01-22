import React, { Component } from 'react';
import './film-lists.css';
import 'antd/dist/antd.css';
import Film from '../Film';
import { Row, Col } from 'antd';

class FilmLists extends Component {

  render() {
    return (
        <Row span={8} offset={6} justify="center">
          <Film />
        </Row>
    );
  }
}

export default FilmLists;
