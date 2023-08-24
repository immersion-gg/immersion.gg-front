import React, {useEffect, useState} from 'react'

import {Helmet} from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MostChampionListComponent from '../components/most-champion-list-component'
import MatchListItemComponent from '../components/match-list-item-component'
import '../styles/match-list-page.css'
import {fetchMatches, fetchMostChampion} from "../api/match";

const somePuuid = 'WGDqDxf7elKBYhM7V7VWaA5Pi5G8x81sHMwKKD7oososvT23KIfOAA5J_V_KsHV4NfdhKed0Pkni7Q';
const someSummonerName = '이진성c';

const MatchListPage = () => {
    const [matches, setMatches] = useState([]);
    const [mostChampions, setMostChampions] = useState([]);

    useEffect(()=>{
        fetchMatches(somePuuid)
            .then(res=> setMatches(res.data.content || []));
        fetchMostChampion(somePuuid)
            .then(res => setMostChampions(res.data || []));
    },[])

    return (
        <div className="match-list-page-container">
            <Helmet>
                <title>MatchListPage - exported project</title>
                <meta property="og:title"/>
            </Helmet>
            <SummonerProfileComponent
                rootClassName="summoner-profile-component-root-class-name"></SummonerProfileComponent>
            <div className="match-list-page-iframe">
                <div className="match-list-page-side">
                    <MostChampionListComponent mostChampions={mostChampions}/>
                </div>
                <div className="match-list-page-section">
                    {
                        matches.map((match,index)=><MatchListItemComponent key={index} match={match} summonerName={someSummonerName}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MatchListPage
