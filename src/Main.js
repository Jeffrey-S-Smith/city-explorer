import React from 'react';
import './Main.css';
import Weather from './Weather.js';
import Movie from './Movie.js';
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
      error: false,
      errorMessage: '',
      weatherData: [],
      movieData: [],
    }
  }



  handleCityInput = (e) => {
    let city = e.target.value;
    console.log(city);
    this.setState({
      city: city,
    })
    // console.log(this.state.city);
  }



  handleCitySubmit = async (e) => {
    e.preventDefault();
    // request city data from API
    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      let mapArr = [];
      mapArr.push(response.data[0])
////////
      let weatherData = await this.getWeatherData(response.data[0]);
      
      if (!weatherData ){
        weatherData = [];
      }
      //save that data in state
      console.log(response.data);
      this.setState({
        cityData: mapArr,
        error: false,
        weatherData: weatherData,

      })

      let movieData = await this.getMovieData(response.data[0]);
      
      if (!movieData ){
        movieData = [];
      }
      //save that data in state
      console.log(response.data);
      this.setState({
        error: false,
        movieData: movieData,

      })
      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`,
      });
    //   console.log(error.message);
     }
  }

  getWeatherData = async (cityInfo) => {
   
    try {
      let response = await axios.get(`http://localhost:3001/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}`);
      console.log(response.data);
      return response.data
     
      
    } catch (err) {
      console.log(err);    
    }
  }

  getMovieData = async (cityInfo) => {
   
    try {
      let response = await axios.get(`http://localhost:3001/movie?searchQuery=${cityInfo}`);
      console.log(response.data);
      return response.data
     
      
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let cityChar = this.state.cityData.map((char, idx) => {
      return <li key={idx}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${char.lat},${char.lon}&zoom=12`} />
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

            <Weather
              weatherData={this.state.weatherData} />
              <Movie
              movieData={this.state.movieData} />

            </main>
        </>
      );
    }
  }


export default Main;