import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MatchDetailPage from './views/match-detail-page'
import MatchListPage from './views/match-list-page'
import MatchIngamePage from './views/match-ingame-page'
import ChampionStatisticComponent from './views/champion-statistic-component'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MatchDetailPage} exact path="/match-detail-page" />
        <Route component={MatchListPage} exact path="/match-list-page" />
        <Route component={MatchIngamePage} exact path="/match-ingame-page" />
        <Route component={ChampionStatisticComponent} exact path="/champion-statistic-component"/>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
