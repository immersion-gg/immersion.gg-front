import React from 'react'

import PropTypes from 'prop-types'

import IngameParticipantComponent from './ingame-participant-component'
import '../../styles/match-ingame-component.css'

const MatchIngameComponent = (props) => {
  const { gameLength, queueType, teams } = props.ingame;
  const blueTeam = teams.find(team=>team.teamCode === 'BLUE');
  const redTeam = teams.find(team=>team.teamCode === 'RED');

  return (
    <div className="match-ingame-component-divcontentcontainermargin">
      <div className="match-ingame-component-divcss1m2ho5a">
        <MatchInGameBaseComponent
            gameDuration={gameLength}
            queueTypeName={queueType.name}
        />
        <IngameParticipantComponent team={blueTeam}/>
        <IngameParticipantComponent team={redTeam}/>
      </div>
    </div>
  )
}

const MatchInGameBaseComponent = ({ gameDuration, queueTypeName }) => {
  const getGameMode = (queueTypeName) => queueTypeName === '칼바람협곡' ? queueTypeName : '소환사의 협곡';

  return (
      <div className="match-ingame-component-game-info-wrapper">
        <div className="match-ingame-component-game-info">
            <span className="match-ingame-component-text">{queueTypeName}</span>
          <div className="match-ingame-component-spanmap">
              <span className="match-ingame-component-text2">{getGameMode(queueTypeName)}</span>
          </div>
          <span className="match-ingame-component-text4">{gameDuration}</span>
        </div>
      </div>
  )
}

MatchInGameBaseComponent.propTypes = {
  gameDuration: PropTypes.string,
  queueTypeName: PropTypes.string
}

MatchIngameComponent.propTypes = {
  ingame: PropTypes.instanceOf
}

export default MatchIngameComponent
