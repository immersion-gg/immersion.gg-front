import {useEffect, useState} from 'react'

import {Helmet} from 'react-helmet'
import MatchIngameComponent from '../components/in-game/match-ingame-component'
import '../styles/match-ingame-page.css'
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import {fetchUserFlexRank, fetchUserInfo, fetchUserRating, fetchUserSoloRank} from "../api/summoner";
import SummonerProfileComponent from "../components/summoner-profile-component";
import LogoComponent from "../components/logo-component";
import NotPlayingComponent from "../components/in-game/not-playing-component";
import {fetchProgressMatch} from "../api/match";

const MatchIngamePage = () => {
    const location = useLocation();
    const summonerName = location.state.inputSummonerName;

    const [progressMatch, setProgressMatch] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userRating, setUserRating] = useState([]);
    const [soloRank, setSoloRank] = useState([]);
    const [flexRank, setFlexRank] = useState([]);

    useEffect(() => {
        fetchUserInfo(summonerName).then(res => {
            const userInfo = res.data;
            setUserInfo(userInfo);

            fetchProgressMatch(userInfo.id)
                .then(res => setProgressMatch(res.data));
            fetchUserRating(userInfo.puuid)
                .then(res => setUserRating(res.data));
            fetchUserSoloRank(summonerName)
                .then(res => setSoloRank(res.data));
            fetchUserFlexRank(summonerName)
                .then(res => setFlexRank(res.data));
        });
    },[location]);

  return (
    <div className="match-ingame-page-container">
      <Helmet>
        <title>인게임 조회</title>
      </Helmet>
      <LogoComponent/>
        {
            userInfo && <SummonerProfileComponent
                userInfo={userInfo}
                userRating={userRating}
                soloRank={soloRank}
                flexRank={flexRank}
            />
        }
        {
            progressMatch ?
                <MatchIngameComponent ingame={progressMatch}/>
                : <NotPlayingComponent summonerName={summonerName}/>
        }
    </div>
  )
}

MatchIngamePage.propTypes = {
    ingame: PropTypes.instanceOf
}

export default MatchIngamePage
