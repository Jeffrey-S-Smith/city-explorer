import React from 'react'
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

  
  render() {
   
    let weatherDataArr = this.props.weatherData.map((data, indx) => {
      
      return (
       
          <ListGroupItem key={indx}>
      Description: {data.description}, Date: {data.date}, Max-temp: {data.max_temp}, Low-temp: {data.low_temp},
         
          </ListGroupItem>
       
      

      );
    })
    
  return (
    <ListGroup>
    {weatherDataArr}
    </ListGroup>)
}
}

export default Weather;