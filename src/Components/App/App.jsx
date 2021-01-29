import React, { Component } from 'react';
import './app.css';
import 'antd/dist/antd.css';
import Film from '../Film';
import TopSearch from '../TopSearch';
import TopPanel from '../TopPanel';
import { Pagination, Row } from 'antd';
import debounce from 'lodash.debounce';

export default class App extends Component {

  state = {
    inputValue: 'return',
    page: 1
  }

  getDataFromInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  changePage(num){
    this.setState({
      page: num
    })
  }

  render() {
    const { inputValue, page } = this.state;
    return (
      <div className="container">
        <div className="app">
          <TopPanel />
          <TopSearch getDataFromInput={debounce(this.getDataFromInput, 1000)} />
          <Row justify="center">
            <Film 
              value={inputValue}
              page={page} />
            </Row>
          <Row justify="center" align="middle">
          <Pagination onChange={elem => this.changePage(elem)} defaultCurrent={1} total={50} />
          </Row>
      </div>
      </div>
    );
  }
}
