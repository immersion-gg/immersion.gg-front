import React from 'react'

import { Helmet } from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MatchDetailComponent from '../components/match-detail-component'
import '../styles/match-detail-page.css'

const MatchDetailPage = () => {
  return (
    <div className="match-detail-page-container">
      <Helmet>
        <title>MatchDetailPage - exported project</title>
        <meta
          property="og:title"
          content="MatchDetailPage - exported project"
        />
      </Helmet>
      <SummonerProfileComponent></SummonerProfileComponent>
      <MatchDetailComponent></MatchDetailComponent>
    </div>
  )
}

export default MatchDetailPage
