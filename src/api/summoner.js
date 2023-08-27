import riotAppApi from "./axios-instance";

const fetchUserInfo = (summonerName) => riotAppApi.get(`/users/${summonerName}`);
const fetchUserRating = (puuid) => riotAppApi.get(`/rating/${puuid}`);
const fetchUserSoloRank = (summonerName) => riotAppApi.get(`/users/${summonerName}/solorank`);
const fetchUserFlexRank = (summonerName) => riotAppApi.get(`/users/${summonerName}/flexrank`);
const fetchUserRate = (data) => riotAppApi.post('/rating', data);

export { fetchUserInfo, fetchUserRating, fetchUserRate, fetchUserSoloRank, fetchUserFlexRank };