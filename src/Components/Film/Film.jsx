import React, { Component } from 'react';
import './film.css';
import { Card, Typography } from 'antd';
import 'antd/dist/antd.css';
import avatar from './1415765.jpg';

const { Title, Text } = Typography;

class Film extends Component {
  
  state = {
    array: []
  }

componentDidMount(){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=05e95f40431909703294af8aa788da5d&query=return`)
      .then(res => res.json()).then(date =>
        this.setState({
          array: date.results
      })
    );
  }

  newCard(movie){
    const title = movie.title;
    const desc = movie.overview;

    return (
      <div className="movie">
        <Card size="small" hoverable style={{ width: 454 }}>
          <img height={270} src={avatar} alt="example"/>
          <div className="text-content">
            <Title level={4}>{title}</Title>
            <div className="date">March 5, 2020 </div>
            <div className="genre">
            <Text code>Action</Text>
            <Text code>Drama</Text>
            </div>
            <div>{desc}</div>
          </div>
        </Card>
    </div>
    );
  }

  render() {
    const { array } = this.state;
    return(
      <div>
        {array.map(movie => this.newCard(movie))}
      </div>
    );
  }
}  

export default Film;