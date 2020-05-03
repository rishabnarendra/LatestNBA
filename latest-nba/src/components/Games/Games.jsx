import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Games.module.css';

const Games = ({ gamesByDate }) => {

    // Can't render data if it is undefined 
    if(!gamesByDate) {
        return 'Loading';
    }

    return (
        <div>
            { !gamesByDate ? <p>No games today</p> : null }
            {gamesByDate.map(game => 
                <Grid container justify = "center">
                    <Grid item xs = { 5 } md = { 2 } component = { Card } className = { styles.card }>
                        <CardContent>
                            <p className = {styles.arena}>{ game.arena }</p>
                            <p className = {styles.city}>{ game.city }</p>
                            <p className = { styles.score }><img className = {styles.logo} src = {game.vTeam.logo}/> &nbsp; { game.vTeam.shortName } - <CountUp start = { 0 } end = { game.vTeam.score.points } duration = { 3.00 } separator = "," /></p>
                            <p className = { styles.score }><img className = {styles.logo} src = {game.hTeam.logo}/> &nbsp; { game.hTeam.shortName } - <CountUp start = { 0 } end = { game.hTeam.score.points } duration = { 3.00 } separator = "," /></p>
                        </CardContent>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default Games; 