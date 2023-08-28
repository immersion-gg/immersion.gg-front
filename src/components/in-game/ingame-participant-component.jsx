import React from 'react'

import PropTypes from 'prop-types'

import IngameParticipantItemComponent from './ingame-participant-item-component'
import '../../styles/ingame-participant-component.css'

const IngameParticipantComponent = (props) => {
  const { teamCode, participants } = props.team;
  const getTeamColorName = (teamCode) => teamCode === 'BLUE' ? '블루' : '레드';
  const teamRatingAverage = () => participants
      .map(it=>it.summoner.userRatingAverage)
      .reduce((a, b) => a + b) / participants.length;

  return (
    <div className="ingame-participant-component-table">
      <div className="ingame-participant-component-header-row">
        <div className="ingame-participant-component-cell">
          <span className="ingame-participant-component-text">{ `${getTeamColorName(teamCode)}팀`}</span>
        </div>
        <div className="ingame-participant-component-cell1">
          <span className="ingame-participant-component-text02">Tier Average: </span>
          <span className="ingame-participant-component-text03">Gold3</span>
        </div>
        <div className="ingame-participant-component-cell2">
          <span className="ingame-participant-component-text04">유저 평가 평균:</span>
          <span className="ingame-participant-component-text05">{`${teamRatingAverage() || 0} / 5`}</span>
        </div>
        <div className="ingame-participant-component-cell3">
          <span className="ingame-participant-component-text06">S2023</span>
        </div>
        <div className="ingame-participant-component-cell4">
          <span className="ingame-participant-component-text08">랭크 승률</span>
        </div>
        <div className="ingame-participant-component-cell5">
          <span className="ingame-participant-component-text10">S2023 챔피언 정보</span>
        </div>
      </div>
      <div className={`ingame-participant-component-body-${teamCode.toLowerCase()}`}>
        {
          participants.map(participant=>
              <IngameParticipantItemComponent
                  key={participant.summonerId}
                  participant={participant}
              />)
        }
      </div>
    </div>
  )
}

IngameParticipantComponent.propTypes = {
  team: PropTypes.arrayOf,
  teamCode: PropTypes.string
}

export default IngameParticipantComponent
