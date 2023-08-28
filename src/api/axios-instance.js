import axios from 'axios';

const riotAppApiUrl = `${process.env.REACT_APP_RIOT_APP_API_URL}`;

const riotAppApi = axios.create({
  baseURL: riotAppApiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default riotAppApi;
