import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class PickDate extends Component {

  constructor(props){
    super(props);
  }

  state = {
    date: '',
  }

  onChange = date => {
    this.props.date = date; 
      // this.setState({ date });
      // console.log(date); 
  }

  render() {
    return (
      <div style = {{ 'text-align': 'center' }}>
        <DatePicker
          onChange = { this.onChange }
          value = { this.props.date }
        />
      </div>
    );
  }
}

export default PickDate;