import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Standings.module.css';

var tableHeaderStyle = {
    fontWeight: 700,
    color: '#6b92ff',
    fontSize: '16px',
};

var rowStyle = {
    color: 'grey',
};

const Standings = ({ conferenceStandings, teams }) => {

    // Can't render data if it is undefined 
    if(!conferenceStandings || !teams) {
        return 'Loading';
    }

    function calculatePercentage(win, loss) {
        return (win * 100 / (win + loss)).toFixed(3); 
    }

    function getTeamNameById(id, conference) {
        console.log(id);
        console.log(conference);
        if(conference === 'east') {
          for(let i = 0; i < teams.length; i++) {
            if(id === teams[i].teamId) {
              return teams[i].fullName;
            }
          }
        }
        else {
          for(let i = 0; i < teams.length; i++) {
            if(id === teams[i].teamId) {
              return teams[i].fullName;
            }
          }
        }
        return '';
      }

    return (
    <TableContainer component={Paper}>
      <Table align = "center" style={{ 'text-align': 'center', width: 1000 }} size = "medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style = { tableHeaderStyle } align="left">Team</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">W</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">L</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">PCT</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">GB</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">Conf</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">Home</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">Away</TableCell>
            <TableCell style = { tableHeaderStyle } align="left">L10</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conferenceStandings.map(standings => 
            <TableRow> 
                <TableCell align="left" style = { rowStyle }>{ getTeamNameById(standings.teamId, standings.conference.name) }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.win }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.loss }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ calculatePercentage(standings.win, standings.loss) }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.gamesBehind }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.conference.win } - { standings.conference.loss }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.home.win } - { standings.home.loss }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.away.win } - { standings.away.loss }</TableCell>
                <TableCell align="left" style = { rowStyle }>{ standings.lastTenWin } - { standings.lastTenLoss }</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Standings; 