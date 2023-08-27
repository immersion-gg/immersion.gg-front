import {useHistory} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const ParticipantComponent = ({participants}) => {
    const history = useHistory();
    const GoOtherMatchList = (summonerName) => history.push({pathname: `/match-list-page/${summonerName}`})

    return (
        <div className="match-list-item-component-list1">
            {
                participants.map(it =>
                <div key={it.summonerName} className="match-list-item-component-item12">
                    <img src={it.championImageUrl} className="match-list-item-component-shenpng"/>
                    <div className="match-list-item-component-link06">
                        <span className="match-list-item-component-text37">
                            <span onClick={() => GoOtherMatchList(it.summonerName)}>{it.summonerName}</span>
                        </span>
                    </div>
                </div>)
            }
        </div>
    )
}

ParticipantComponent.propTypes = {
    participants: PropTypes.arrayOf(
        PropTypes.shape({
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
        }))
}

export default ParticipantComponent;