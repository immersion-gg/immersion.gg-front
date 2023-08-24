import React from 'react'

import { Helmet } from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MostChampionListComponent from '../components/most-champion-list-component'
import MatchListItemComponent from '../components/match-list-item-component'
import '../styles/match-list-page.css'

const MatchListPage = () => {
  return (
    <div className="match-list-page-container">
      <Helmet>
        <title>MatchListPage - exported project</title>
        <meta property="og:title" content="MatchListPage - exported project" />
      </Helmet>
      <SummonerProfileComponent rootClassName="summoner-profile-component-root-class-name"></SummonerProfileComponent>
      <div className="match-list-page-iframe">
        <div className="match-list-page-side">
          <MostChampionListComponent></MostChampionListComponent>
        </div>
        <div className="match-list-page-section">
          <MatchListItemComponent rootClassName="match-list-item-component-root-class-name7"></MatchListItemComponent>
          <MatchListItemComponent rootClassName="match-list-item-component-root-class-name8"></MatchListItemComponent>
          <MatchListItemComponent rootClassName="match-list-item-component-root-class-name9"></MatchListItemComponent>
          <MatchListItemComponent rootClassName="match-list-item-component-root-class-name10"></MatchListItemComponent>
        </div>
      </div>
    </div>
  )
}

export default MatchListPage
