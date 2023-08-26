import { useState } from "react";

import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MostChampionListComponent from '../components/most-champion-list-component'
import MatchListItemComponent from '../components/match-list-item-component'
import MatchDetail from '../components/real-match-detail-component'
import '../styles/match-list-page.css'
import '../styles/champion-statistic-component.css'

const MatchListPage = () => {

let history = useHistory();

const [showDetail, setShowDetail] = useState(false);

const openDetail =() => {
    setShowDetail(!showDetail);
  };


  const GoHome = () => {
        history.push({pathname: `/`});
  };

  return (

    <div className="match-list-page-container">
      <Helmet>
        <title>MatchListPage - exported project</title>
        <meta property="og:title" content="MatchListPage - exported project" />
      </Helmet>
        <div className="champion-statistic-component-nav">
                        <div className="champion-statistic-component-divafn8215">
                          <div className="champion-statistic-component-linkmargin">
                            <img
                              onClick = {GoHome}
                              alt="LinkSVG428"
                              src="/external/linksvg428-xbf.svg"
                              className="champion-statistic-component-link-svg"
                            />
                          </div>
                        </div>
                      </div>
      <SummonerProfileComponent rootClassName="summoner-profile-component-root-class-name"></SummonerProfileComponent>
      <div className="match-list-page-iframe">
        <div className="match-list-page-side">
          <MostChampionListComponent></MostChampionListComponent>
        </div>
        <div className="match-list-page-section">
         <div onClick ={openDetail} >
          <MatchListItemComponent rootClassName="math-list-item-component-root-class-name6"></MatchListItemComponent>
          </div>
          <div>
            {showDetail && <MatchDetail />}
           </div>
        </div>
      </div>
    </div>
  )
}

export default MatchListPage
