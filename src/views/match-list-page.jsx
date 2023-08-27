import {useEffect, useState} from "react";

import {useHistory} from "react-router-dom";
import { Helmet } from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MostChampionListComponent from '../components/most-champion-list-component'
import MatchListItemComponent from '../components/match-list-item-component'
import '../styles/match-list-page.css'
import '../styles/champion-statistic-component.css'
import {fetchMatches, fetchMostChampion} from "../api/match";
import { fetchUserInfo, fetchUserRating, fetchUserSoloRank, fetchUserFlexRank } from '../api/summoner';


const somePuuid = 'WGDqDxf7elKBYhM7V7VWaA5Pi5G8x81sHMwKKD7oososvT23KIfOAA5J_V_KsHV4NfdhKed0Pkni7Q';
const someSummonerName = 'JiWonKang';

const MatchListPage = () => {
    const [matches, setMatches] = useState([]);
    const [mostChampions, setMostChampions] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [userRating, setUserRating] = useState([]);
    const [soloRank, setSoloRank] = useState([]);
    const [flexRank, setFlexRank] = useState([]);

    const openDetail = () => setShowDetail(!showDetail);

    useEffect(()=>{
        fetchMatches(somePuuid)
            .then(res=> setMatches(res.data.content || []));
        fetchMostChampion(somePuuid)
            .then(res => setMostChampions(res.data || []));
        fetchUserInfo(someSummonerName)
          .then(res => setUserInfo(res.data));
        fetchUserRating("nWNJ3TFBikpBRHO6o1jMQTeY8T9lwCeKAq73WzxB3iTKcMnFTjQ8mElAWg4R38jLuTuvEheG6eIAcw")
          .then(res => setUserRating(res.data));
        fetchUserSoloRank(someSummonerName)
          .then(res => setSoloRank(res.data));
        fetchUserFlexRank(someSummonerName)
          .then(res => setFlexRank(res.data));
    },[]);

    console.log(openDetail);

    return (
    <div className="match-list-page-container">
      <Helmet>
          <title>전적 리스트</title>
      </Helmet>
      <LogoComponent/>
      { userInfo && <SummonerProfileComponent userInfo = {userInfo} userRating = {userRating} soloRank = {soloRank} flexRank = {flexRank}/>
      }
      <div className="match-list-page-iframe">
        <div className="match-list-page-side">
          <MostChampionListComponent mostChampions={mostChampions}/>
        </div>
        <div className="match-list-page-section">
            {
                matches.map((match, index) => <MatchListItemComponent key={index} match={match} summonerName={someSummonerName}/>)
            }
        </div>
      </div>
    </div>
  )
}

const LogoComponent = () => {
    const history = useHistory();
    const GoHome = () => history.push({pathname: `/`});

    return (
        <div className="champion-statistic-component-nav">
            <div className="champion-statistic-component-divafn8215">
                <div className="champion-statistic-component-linkmargin">
                    <img
                        onClick={GoHome}
                        alt="logo"
                        src="/external/linksvg428-xbf.svg"
                        className="champion-statistic-component-link-svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default MatchListPage
