import riotAppApi from "./axios-instance";

const fetchMostChampion = (puuid) => riotAppApi.get(`/match/stat/${puuid}`)
const fetchMatches = (puuid) => riotAppApi.get(`/match/${puuid}`)


export { fetchMostChampion, fetchMatches };