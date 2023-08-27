import IconSlotComponent from "../match-list/icon-slot-component";
import PropTypes from "prop-types";

const ParticipantComponent = ({ participants, isWin=false, teamColor, getCsPerMinute}) => {
    const cellHeader = ['KDA', 'Damage', 'CS', 'Item'];
    const resultFontColor = {
        color: isWin ? 'BLUE' : 'RED'
    }

    return (
        <div className="real-match-detail-component-table">
            <div className="real-match-detail-component-header-row">
                <div className="real-match-detail-component-cell">
                    <span className="real-match-detail-component-text" style={resultFontColor}>
                        { isWin ? '승리' : '패배'}
                    </span>
                    <span className="real-match-detail-component-text001">
                        { teamColor === 'BLUE' ? '(블루팀)' : '(레드팀)'}
                    </span>
                </div>
                <div className="real-match-detail-component-other-cell">
                    {
                        cellHeader.map((cell, index)=>
                            <div key={index} className="real-match-detail-component-cell02">
                                <span className="real-match-detail-component-text004">{cell}</span>
                            </div>)
                    }
                </div>
            </div>
            <div className="real-match-detail-component-body">
                {
                    participants.map(participant => <ParticipantItemComponent
                        key={participant.summonerName}
                        participant={participant}
                        getCsPerMinute={getCsPerMinute}
                    />)
                }
            </div>
        </div>
    )
}

const ParticipantItemComponent = ({ participant, getCsPerMinute }) => {
    const itemUrls = [ participant.itemImageUrl1, participant.itemImageUrl2, participant.itemImageUrl3, participant.itemImageUrl4, participant.itemImageUrl5, participant.itemImageUrl6];

    return (
        <div className="real-match-detail-component-row">
            <div className="real-match-detail-component-data-link">
                <img src={participant.championImageUrl} className="real-match-detail-component-shenpng"/>
                <div className="real-match-detail-component-divlevel">
                    <span className="real-match-detail-component-text014">{participant.championLevel}</span>
                </div>
            </div>
            <div className="real-match-detail-component-data">
                <IconSlotComponent iconUrls={[participant.spellImageUrl1, participant.spellImageUrl2]} imageSize={"18px"} showsVertical/>
            </div>
            <div className="real-match-detail-component-data01">
                <IconSlotComponent iconUrls={[participant.perkImageUrl1, participant.perkImageUrl2]} imageSize={"18px"} showsVertical/>
            </div>
            <div className="real-match-detail-component-data02">
                <span className="real-match-detail-component-text016">{participant.summonerName}</span>
            </div>
            <div className="real-match-detail-component-data04">
                <div className="real-match-detail-component-divkda">
                    <span className="real-match-detail-component-text024">{`${participant.kill}/${participant.death}/${participant.assist}`}</span>
                </div>
                <div className="real-match-detail-component-divkda">
                    <span className="real-match-detail-component-text026">{`${participant.kda.toFixed(2)}:1`}</span>
                </div>
            </div>
            <div className="real-match-detail-component-data05">
                <div className="real-match-detail-component-div02">
                    <span className="real-match-detail-component-text028">12,914</span>   {/*  TODO */}
                    <progress max={30} value={10}/> {/*  TODO */}
                </div>
            </div>
            <div className="real-match-detail-component-data07">
                <span className="real-match-detail-component-text035">{participant.cs}</span>
                <span className="real-match-detail-component-text037">{`${getCsPerMinute(participant.cs)}/m`}</span>
            </div>
            <div className="real-match-detail-component-data08">
                <IconSlotComponent iconUrls={itemUrls} />
            </div>
        </div>
    )
}

ParticipantComponent.propTypes = {
    participants: PropTypes.arrayOf,
    isWin: PropTypes.bool,
    teamColor: PropTypes.string,
    getCsPerMinute: PropTypes.func
}

ParticipantItemComponent.propTypes = {
    participant: PropTypes.shape({
        summonerName: PropTypes.string,
        championImageUrl: PropTypes.string,
        teamPosition: PropTypes.string,
        championLevel: PropTypes.number,
        kill: PropTypes.number,
        death: PropTypes.number,
        assist: PropTypes.number,
        kda: PropTypes.number,
        win: PropTypes.number,
        visionScore: PropTypes.number,
        cs: PropTypes.number,
        spellImageUrl1: PropTypes.string,
        spellImageUrl2: PropTypes.string,
        perkImageUrl1: PropTypes.string,
        perkImageUrl2: PropTypes.string,
        itemImageUrl1: PropTypes.string,
        itemImageUrl2: PropTypes.string,
        itemImageUrl3: PropTypes.string,
        itemImageUrl4: PropTypes.string,
        itemImageUrl5: PropTypes.string,
        itemImageUrl6: PropTypes.string
    }),
    getCsPerMinute: PropTypes.func
}

export default ParticipantComponent;