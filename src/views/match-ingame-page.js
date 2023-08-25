import React from 'react'
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'

import SummonerProfileForIngameComponent from '../components/summoner-profile-for-ingame-component'
import IngameComponent from '../components/ingame-component'
import '../styles/match-ingame-page.css'
import '../styles/champion-statistic-component.css'

const MatchIngamePage = (props) => {

let history = useHistory();

  const GoHome = () => {
        history.push({pathname: `/`});
  };
  return (
    <div className="match-ingame-page-container">
      <Helmet>
        <title>MatchIngamePage - exported project</title>
        <meta
          property="og:title"
          content="MatchIngamePage - exported project"
        />
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


      <SummonerProfileForIngameComponent rootClassName="summoner-profile-for-ingame-component-root-class-name3"></SummonerProfileForIngameComponent>
      <IngameComponent rootClassName="ingame-component-root-class-name"></IngameComponent>
    </div>
  )
}

export default MatchIngamePage
