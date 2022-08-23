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
        // dataCity: [],
     
   
  }
}


  handleCityInput = (e) => {
    let city = e.target.value;
    console.log(city);
    this.setState ({
      city: city,
    })
    console.log(this.state.city);
  }


  handleCitySubmit = async (e) => {
    e.preventDefault();
    // request city data from API
    let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    //save that data in state
    console.log(response.data);
    this.setState({
      cityData: response.data,
      
    })
    console.log(this.state.cityData);
  }
  render() {
    let cityChar = this.state.cityData.map((char, idx) => {
      return <li key={idx}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
        <Card.Text>{char.lat}</Card.Text>
        <Card.Text>{char.lon}</Card.Text>
        <Card.Text>{char.display_name}</Card.Text>
        </Card.Body>
        </Card>
        </li>
   
    });
   
    return (
      <>
        <main>
          <Form onSubmit={this.handleCitySubmit}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Pick City</label>
              <input type="text" class="form-control" id="exampleFormControlInput1"
                onInput={this.handleCityInput}


              />
            </div>

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