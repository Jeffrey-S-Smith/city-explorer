import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Movie.css';

class Movie extends React.Component {
  render() {
    let movieDataArr = this.props.movieData.map((data) => {
      return (
        <Col key={data.id}>
          <Card  className="h-100" style={{ width: '18rem' }}>
            <Card.Body > 
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
              Overview: {data.overview}
              </Card.Text>
              <Card.Text>
              Average Votes {data.average_votes}
              </Card.Text>
              <Card.Text>
               Total Votes: {data.total_votes}
              </Card.Text>
              <Card.Text>
              Popularity: {data.popularity}
              </Card.Text>
              <Card.Text>
               Released Date: {data.released}
              </Card.Text>
              {data.imgPath &&
                <Card.Img variant="bottom" src={data.imgPath} alt="Movie Image" />}
            </Card.Body>
          </Card>
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