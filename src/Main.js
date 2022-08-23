import React from 'react';
import './Main.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: [],
      map: '',
      // error: false;


    }
  }



  handleCityInput = (e) => {
    let city = e.target.value;
    console.log(city);
    this.setState({
      city: city,
    })
    console.log(this.state.city);
  }



  handleCitySubmit = async (e) => {
    e.preventDefault();
    // request city data from API
    let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`);
    //save that data in state
    console.log(response.data);
    this.setState({
      cityData: response.data,

      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`
    })
    console.log(this.state.cityData);
    console.log(this.state.map);
  }
  render() {
    let cityChar = this.state.cityData.map((char, idx) => {
      return <li key={idx}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${char.lat},${char.lon}&zoom=12`} />
            <Card.Text>Latitude: {char.lat}</Card.Text>
            <Card.Text>Longitude: {char.lon}</Card.Text>
            <Card.Text>Location: {char.display_name}</Card.Text>
          </Card.Body>
        </Card>
      </li>

    });

    return (
      <>
        <main>
          <Form onSubmit={this.handleCitySubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Enter City Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              onInput={this.handleCityInput}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
          <ul>
            {cityChar}
          </ul>
        </main>
      </>
    );
  }

}

export default Main;