import PropTypes from 'prop-types'

import '../styles/real-match-detail-component.css'
import ObjectSummaryComponent from "./match-detail/object-summary-component";
import ParticipantComponent from "./match-detail/participant-component";

const RealMatchDetailComponent = (props) => {
  const {participants, winTeam, gameDuration } = props.match;
  const gameMinute = gameDuration.split(":")[0];
  const winParticipants = participants.filter(it=>it.win);
  const loseParticipants = participants.filter(it=>!it.win);
  const getWinningTeamColor = (winTeam) => winTeam === "100" ? 'BLUE' : 'RED';
  const getCsPerMinute = (gameMinute) => (cs) => (cs / Number(gameMinute)).toFixed(1);

  return (
    <div className="real-match-detail-component-item">
      <div className="real-match-detail-component-divcss8v8rmq">
        <ParticipantComponent
            participants={winParticipants}
            isWin
            teamColor={getWinningTeamColor(winTeam)}
            getCsPerMinute={getCsPerMinute(gameMinute)}
        />
        <ObjectSummaryComponent/>
        <ParticipantComponent
            participants={loseParticipants}
            getCsPerMinute={getCsPerMinute(gameMinute)}
            teamColor={getWinningTeamColor(winTeam)}
        />
      </div>
    </div>
  )
}

RealMatchDetailComponent.propTypes = {
  match: PropTypes.shape({
    participants: PropTypes.arrayOf,
    winTeam: PropTypes.string,
    gameDuration: PropTypes.string
  }),
}

export default RealMatchDetailComponent
