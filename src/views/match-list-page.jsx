import {useEffect, useState} from "react";
import {Helmet} from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MostChampionListComponent from '../components/most-champion-list-component'
import MatchListItemComponent from '../components/match-list-item-component'
import '../styles/match-list-page.css'
import '../styles/champion-statistic-component.css'
import {fetchMatches, fetchMostChampion} from "../api/match";
import {fetchUserFlexRank, fetchUserInfo, fetchUserRating, fetchUserSoloRank} from '../api/summoner';
import LogoComponent from "../components/logo-component";
import {useLocation} from "react-router-dom";

const MatchListPage = () => {
    const location = useLocation();

    const [matches, setMatches] = useState([]);
    const [mostChampions, setMostChampions] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const [puuid, setPuuid] = useState("");
    const [userRating, setUserRating] = useState([]);
    const [soloRank, setSoloRank] = useState([]);
    const [flexRank, setFlexRank] = useState([]);

    useEffect(() => {
        const summonerName = location.state.inputSummonerName;
        fetchUserInfo(summonerName).then(res => {
            const userInfo = res.data;
            setUserInfo(userInfo);
            setPuuid(userInfo.puuid);

            fetchMatches(userInfo.puuid)
                .then(res => setMatches(res.data.content || []));
            fetchMostChampion(userInfo.puuid)
                .then(res => setMostChampions(res.data || []));
            fetchUserRating(userInfo.puuid)
                .then(res => setUserRating(res.data));
            fetchUserSoloRank(summonerName)
                .then(res => setSoloRank(res.data));
            fetchUserFlexRank(summonerName)
                .then(res => setFlexRank(res.data));
        });
    }, []);

    return (
    <div className="match-list-page-container">
      <Helmet>
          <title>전적 리스트</title>
      </Helmet>
      <LogoComponent/>
      {
          userInfo && <SummonerProfileComponent
              userInfo = {userInfo}
              userRating = {userRating}
              soloRank = {soloRank}
              flexRank = {flexRank}
          />
      }
      <div className="match-list-page-iframe">
        <div className="match-list-page-side">
          <MostChampionListComponent mostChampions={mostChampions} puuid={puuid}/>
        </div>
        <div className="match-list-page-section">
            {
                matches.map((match, index) => <MatchListItemComponent
                    key={index}
                    match={match}
                    summonerName={userInfo.name}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default MatchListPage
