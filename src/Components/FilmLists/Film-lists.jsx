import React, { Component } from 'react';
import './film-lists.css';
import 'antd/dist/antd.css';
import Film from '../Film';
import { Row } from 'antd';

class FilmLists extends Component {

  render() {
    const { page, inputValue } = this.props;
    return (
        <Row span={8} offset={6} justify="center">
          <Film 
            page={page}
            inputValue={inputValue}
          />
        </Row>
    );
  }
}

export default FilmLists;
