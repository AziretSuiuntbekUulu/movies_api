import React, { Component } from 'react';
import './top-search.css';
import 'antd/dist/antd.css';
import { Input, Row } from 'antd';

export default class TopSearch extends Component {

    state = {
        
    }

    render(){
        const { getDataFromInput } = this.props;
        return(
            <Row justify="center">
                <Input  placeholder="Type to search..." 
                onChange={element => getDataFromInput(element)} />
            </Row>
        );
    }
}