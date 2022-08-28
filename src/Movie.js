import React from 'react';
import SingleMovie from './SingleMovie';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Movie.css';

class Movie extends React.Component {
  render() {
    let movieDataArr = this.props.movieData.map((data) => {
      return (
        <Col key={data.id}>
         <SingleMovie data = {data}/> 
          </Col>
      )
    })
    
    return (
      <div>
       <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
        {movieDataArr}
        </Row>
        </Container>
        </div>
    )
  }
}
export default Movie;