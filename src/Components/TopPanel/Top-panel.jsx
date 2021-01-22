import React, { Component } from 'react';
import './top-panel.css';
import 'antd/dist/antd.css';

export default class TopPanel extends Component {
    render(){
        return(
            <div className="top-panel">
                <button className="top-button active">Search</button>
                <button className="top-button">Rated</button>
            </div>
        );
    }
}