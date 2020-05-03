import React from 'react';
import './App.css';
import { fetchEasternConferenceStandings, fetchEasternConferenceTeams, fetchWesternConferenceTeams, fetchGamesByDate, fetchWesternConferenceStandings } from './api';
import { Date, Games, Standings } from './components';
import './App.css';

class App extends React.Component {

  state = {
    yyyy: '',
    mm: '',
    dd: '',
    easternConferenceStandings: [],
    easternConferenceTeams: [],
    westernConferenceStandings: [],
    westernConferenceTeams: [],
    gamesByDate: []
  };

  async componentDidMount() {
    //this.setState({ easternConferenceStandings: await fetchEasternConferenceStandings() }); 
    //this.setState({ easternConferenceTeams: await fetchEasternConferenceTeams() });
    //this.setState({ westernConferenceStandings: await fetchWesternConferenceStandings() });
    // this.setState({ westernConferenceTeams: await fetchWesternConferenceTeams() }); 
    // this.setState({ gamesByDate: await fetchGamesByDate(yyyy, mm, dd) });
  }

      // let today = new Date(); 
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1;
    // let yyyy = today.getFullYear();
    // if(dd < 10) dd = '0' + dd;
    // if(mm < 10) mm = '0' + mm;
    // let yyyy = '2019';
    // let mm = '01';
    // let dd = '02';

  render() {
    const { gamesByDate } = this.state; 
    const { easternConferenceStandings } = this.state; 
    const { easternConferenceTeams } = this.state; 
    const { westernConferenceStandings } = this.state;  
    const { westernConferenceTeams } = this.state; 

    return (
      <div>
        <Date />
        {/* <Games gamesByDate = { gamesByDate } />
        <Standings conferenceStandings = { easternConferenceStandings } teams = { easternConferenceTeams } /> */}
        {/* <h1 style = {{ textAlign: 'center' }}>Western Conference</h1>
        <Standings conferenceStandings = { westernConferenceStandings } teams = { westernConferenceTeams }  /> */}
      </div>
    );
  }
}

export default App;
