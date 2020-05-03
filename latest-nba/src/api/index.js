import axios from 'axios'; 

const url = 'https://api-nba-v1.p.rapidapi.com';
const apiKey = "403f30c5camshb8ecd0f4795ca77p1d7860jsn152f529df386";
var headers = {
    "X-Mashape-Key": apiKey, 
    "X-Mashape-Host": "api-nba-v1.p.mashape.com"
};

export const fetchSeasons = async () => {
    try {
        const seasonsUrl = `${url}/seasons/`; 
        const { data: { api: { seasons } } } = await axios.get(seasonsUrl, { headers: headers }); 
        return seasons;
    } catch(error) {
        return error; 
    }
}

export const fetchTeams = async () => {
    try {
        const teamssUrl = `${url}/teams/teamId/1`; 
        const { data } = await axios.get(teamssUrl, { headers: headers }); 
        return data;
    } catch(error) {
        return error; 
    }
}

export const fetchEasternConferenceStandings = async () => {
    try {
        const easternStandingsUrl = `${url}/standings/standard/2019/conference/east`; 
        const { data: { api: { standings } } } = await axios.get(easternStandingsUrl, { headers: headers }); 
        return standings;
    } catch(error) {
        return error; 
    }
}
    
export const fetchWesternConferenceStandings = async () => {
    try {
        const westernStandingsUrl = `${url}/standings/standard/2019/conference/west`; 
        const { data: { api: { standings } } } = await axios.get(westernStandingsUrl, { headers: headers }); 
        return standings;
    } catch(error) {
        return error; 
    }
}

export const fetchEasternConferenceTeams = async () => {
    try {
        const easternConferenceUrl = `${url}/teams/confName/East`; 
        const { data: { api: { teams } } } = await axios.get(easternConferenceUrl, { headers: headers }); 
        return teams;
    } catch(error) {
        return error; 
    }
}

export const fetchWesternConferenceTeams = async () => {
    try {
        const easternConferenceUrl = `${url}/teams/confName/West`; 
        const { data: { api: { teams } } } = await axios.get(easternConferenceUrl, { headers: headers }); 
        return teams;
    } catch(error) {
        return error; 
    }
}

export const fetchGamesByDate = async (yyyy, mm, dd) => {
    try {
        const date = yyyy + '-' + mm + '-' + dd; 
        const gamesOnDateUrl = `${url}/games/date/${date}`; 
        console.log(await axios.get(gamesOnDateUrl, { headers: headers }));
        const { data: { api: { games } } } = await axios.get(gamesOnDateUrl, { headers: headers }); 
        return games;
    } catch(error) {
        return error; 
    }
}