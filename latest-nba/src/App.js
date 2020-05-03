import React, { Component } from 'react';
import './App.css';
import { fetchEasternConferenceStandings, fetchEasternConferenceTeams, fetchWesternConferenceTeams, fetchGamesByDate, fetchWesternConferenceStandings } from './api';
import { PickDate, Games, Standings } from './components';
import './App.css';

class App extends Component {

  state = {
    yyyy: '',
    mm: '',
    dd: '',
    date: '',
    easternConferenceStandings: [],
    easternConferenceTeams: [],
    westernConferenceStandings: [],
    westernConferenceTeams: [],
    gamesByDate: []
  };

  async componentDidMount() {
    // var d = this.state.date; 
    // if (!!d.valueOf()) { 
    //   var yyyy = d.getFullYear();
    //   var mm = d.getMonth();
    //   var dd = d.getDate();
    // }
    // else {
    //   var today = new Date(); 
    //   this.setState( {date: today });
    //   var dd = today.getDate();
    //   var mm = today.getMonth() + 1;
    //   var yyyy = today.getFullYear();
    // }
    // if(dd < 10) dd = '0' + dd;
    // if(mm < 10) mm = '0' + mm;
    //this.setState({ easternConferenceStandings: await fetchEasternConferenceStandings() }); 
    //this.setState({ easternConferenceTeams: await fetchEasternConferenceTeams() });
    //this.setState({ westernConferenceStandings: await fetchWesternConferenceStandings() });
    // this.setState({ westernConferenceTeams: await fetchWesternConferenceTeams() }); 
    this.setState({ gamesByDate: await fetchGamesByDate('2019', '02', '05') });
  }
    // let yyyy = '2019';
    // let mm = '01';
    // let dd = '02';

  render() {
    const { date } = this.state; 
    const { gamesByDate } = this.state; 
    const { easternConferenceStandings } = this.state; 
    const { easternConferenceTeams } = this.state; 
    const { westernConferenceStandings } = this.state;  
    const { westernConferenceTeams } = this.state; 

    return (
      <div>
        {/* <PickDate date = { date } /> */}
        <Games gamesByDate = { gamesByDate } />
        {/* <Standings conferenceStandings = { easternConferenceStandings } teams = { easternConferenceTeams } /> */}
        {/* <h1 style = {{ textAlign: 'center' }}>Western Conference</h1>
        <Standings conferenceStandings = { westernConferenceStandings } teams = { westernConferenceTeams }  /> */}
      </div>
    );
  }
}

export default App;
