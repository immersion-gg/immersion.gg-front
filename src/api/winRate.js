import riotAppApi from "./axios-instance";

const fetchWinRate = (puuid, championName) => riotAppApi.get(`/match/win-rate/${puuid}/${championName}`);

export { fetchWinRate };