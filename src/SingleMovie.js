import React from 'react';
import Card from 'react-bootstrap/Card';

class SingleMovie extends React.Component {
  render() {
    return (

      <Card  className="h-100" style={{ width: '18rem' }}>
            <Card.Body > 
              <Card.Title>{this.props.data.title}</Card.Title>
              <Card.Text>
              Overview: {this.props.data.overview}
              </Card.Text>
              <Card.Text>
              Average Votes {this.props.data.average_votes}
              </Card.Text>
              <Card.Text>
               Total Votes: {this.props.data.total_votes}
              </Card.Text>
              <Card.Text>
              Popularity: {this.props.data.popularity}
              </Card.Text>
              <Card.Text>
               Released Date: {this.props.data.released}
              </Card.Text>
              {this.props.data.imgPath &&
                <Card.Img variant="bottom" src={this.props.data.imgPath} alt="Movie Image" />}
            </Card.Body>
          </Card>
    )



  }
}
export default SingleMovie;