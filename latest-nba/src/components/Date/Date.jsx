import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class Date extends Component {
  state = {
    date: '',
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div style = {{ 'text-align': 'center' }}>
        <DatePicker
          onChange = { this.onChange }
          value = { this.state.date }
        />
      </div>
    );
  }
}

export default Date;