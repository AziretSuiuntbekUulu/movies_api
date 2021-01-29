import React, { Component } from 'react';
import './film.css';
import { Card, Typography, Image, Spin, Alert, Row} from 'antd';
import 'antd/dist/antd.css';
import { format } from 'date-fns';

const { Title, Text } = Typography;

class Film extends Component {
  
  state = {
    array: [],
    loading: true,
    error: false
  }

  componentDidMount(){
      this.getData()
  }

  componentDidUpdate(prevProps) {
    const {value, page} = this.props

    if (page !== prevProps.page || value !== prevProps.value) {
      this.getData()
    }
  }

  getData = () => {
    const { value, page } = this.props;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=05e95f40431909703294af8aa788da5d&query=${value}&page=${page}`)
      .then(res => res.json())
      .then(date => 
        this.setState({
          array: date.results,
          loading: false
      }))
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  shortDesc(str, maxLength, dots){
    const normDesc = str.indexOf(' ', maxLength);
    return (normDesc === -1 ? str : str.substr(0, normDesc) + dots); 
  }

  spinner(){
    return(
      <Row justify="center">
        <Spin size="large" className="spin" />
      </Row>
    );
  }

  newCard(movie){
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const idMovie = movie.id;
    const title = this.shortDesc(movie.original_title, 23, "...");
    const desc = this.shortDesc(movie.overview, 90, "...");
    const date = format(new Date(movie.release_date), 'PP');

    return (
      <div className="movie" key={idMovie}>
        <Card size="small" hoverable style={{ width: 454 }}>
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

    const { array, loading, error } = this.state;

    if (loading){
      return this.spinner()
    }

    if(error){
      return <Alert message="Something went wrong" type="error" />
    }

    if (array.length === 0){
      return <Alert message="Movie not found" type="error" />
    }
    
    return(
      <React.Fragment>
        {array.map(movie => this.newCard(movie)) }
      </React.Fragment>
    );
  }
}  

export default Film;