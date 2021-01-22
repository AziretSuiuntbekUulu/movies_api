import React, { Component } from 'react';
import './film.css';
import { Card, Typography, Image, Spin} from 'antd';
import 'antd/dist/antd.css';
import { format } from 'date-fns';

const { Title, Text } = Typography;

class Film extends Component {
  
  state = {
    array: [],
    loading: true
  }

componentDidMount(){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=05e95f40431909703294af8aa788da5d&query=return`)
      .then(res => res.json()).then(date =>
        this.setState({
          array: date.results,
          loading: false
      })
    );
  }

  shortDesc(str, maxLength, dots){
    const normDesc = str.indexOf(' ', maxLength);
    return (normDesc === -1 ? str : str.substr(0, normDesc) + dots); 
  }

  newCard(movie){
    const idMovie = movie.id;
    const title = movie.original_title;
    const desc = this.shortDesc(movie.overview, 150, "...");
    const date = format(new Date(movie.release_date), 'yyyy-MM-dd');
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
      <div className="movie">
        <Card key={idMovie} size="small" hoverable style={{ width: 454 }}>
          <Image src={image} />
          <div className="text-content">
            <Title level={4}>{title}</Title>
            <div className="date">{date}</div>
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
    const { array, loading } = this.state;

    if(loading){
      return <Spin size="large" />
    }

    return(
      <React.Fragment>
        {array.map(movie => this.newCard(movie))}
      </React.Fragment>
    );
  }
}  

export default Film;