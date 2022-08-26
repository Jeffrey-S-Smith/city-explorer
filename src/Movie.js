import React from 'react';
import Card from 'react-bootstrap/Card';
import './Movie.css';

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.movieData.title}</Card.Title>
            <Card.Text>
              {this.props.movieData.overview}
            </Card.Text>
            {this.props.movieData.imgPath && 
            <Card.Img variant="bottom" src={this.props.movieData.imgPath} alt="Movie Image" />}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Movie;