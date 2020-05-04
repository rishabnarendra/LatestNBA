import React, { Component } from 'react'; 
import './App.css';
import { fetchEasternConferenceStandings, fetchEasternConferenceTeams, fetchWesternConferenceTeams, fetchGamesByDate, fetchWesternConferenceStandings } from './api';
import { PickDate, Games, Standings } from './components';

class App extends Component {

  state = {
    selectedConference: 'east',
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
    let east = await fetchEasternConferenceStandings(); 
    this.setState({ easternConferenceStandings: this.sortConferenceStandings(east)});
    this.setState({ easternConferenceTeams: await fetchEasternConferenceTeams() });
    let west = await fetchWesternConferenceStandings(); 
    this.setState({ westernConferenceStandings: this.sortConferenceStandings(west) });
    this.setState({ westernConferenceTeams: await fetchWesternConferenceTeams() }); 
    this.setState({ gamesByDate: await fetchGamesByDate('2019', '02', '05') });
  }
    // let yyyy = '2019';
    // let mm = '01';
    // let dd = '02';

  sortConferenceStandings(standings) {
    for(let i = 0; i < standings.length; i++) {
      let max = i; 
      for(let j = i + 1; j < standings.length; j++) {
        if(standings[j].win > standings[max].win) {
          max = j; 
        }
      }
      let temp = standings[max];
      standings[max] = standings[i];
      standings[i] = temp; 
    }
    return standings; 
  }

  changeConference(selectedConference) {
    this.setState({ selectedConference })
  }

  render() {
    const { date } = this.state; 
    const { selectedConference } = this.state; 
    const { gamesByDate } = this.state; 
    const { easternConferenceStandings } = this.state; 
    const { easternConferenceTeams } = this.state; 
    const { westernConferenceStandings } = this.state;  
    const { westernConferenceTeams } = this.state; 

    return (
      <div>
        {/* <PickDate date = { date } /> */}
        <div class = "background">
          <Games gamesByDate = { gamesByDate } />
        </div>
        <div style = {{ textAlign: 'center' }}>
          { selectedConference === 'east' ?
            <p onClick = { () => this.changeConference('east') } style = {{ cursor: 'pointer', fontWeight: 'bold', color: 'grey', marginLeft: '7%', float: 'left' }}>Eastern Conference</p> :
            <p onClick = { () => this.changeConference('east') } style = {{ cursor: 'pointer', color: 'grey', marginLeft: '7%', float: 'left' }}>Eastern Conference</p>
          }
          { selectedConference === 'west' ?
            <p onClick = { () => this.changeConference('west') } style = {{ cursor: 'pointer', fontWeight: 'bold', color: 'grey', marginRight: '7%', float: 'right' }}>Western Conference</p> :
            <p onClick = { () => this.changeConference('west') } style = {{ cursor: 'pointer', color: 'grey', marginRight: '7%', float: 'right' }}>Western Conference</p>
          }
        </div>
        { selectedConference === 'east' ? 
          <Standings conferenceStandings = { easternConferenceStandings } teams = { easternConferenceTeams } /> :
          <Standings conferenceStandings = { westernConferenceStandings } teams = { westernConferenceTeams } /> }
      </div>
    );
  }
}

export default App;
