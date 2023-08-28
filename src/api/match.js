import riotAppApi from "./axios-instance";

const fetchMostChampion = (puuid) => riotAppApi.get(`/match/stat/${puuid}`);
const fetchMatches = (puuid) => riotAppApi.get(`/match/${puuid}`);
const fetchProgressMatch = (summonerId) => riotAppApi.get(`/spectator/${summonerId}`);

const refreshMatches = (puuid) => riotAppApi.post(`/match/${puuid}`);

export { fetchMostChampion, fetchMatches, fetchProgressMatch, refreshMatches};